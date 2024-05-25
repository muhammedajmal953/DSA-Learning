

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail=null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    addNode(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail=node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    addNodeLast(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail=node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
            this.tail=node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) return console.log('Please give avlid string')

        if (index === 0) return this.addNode(value)

        else {
            const node = new Node(value)
            let prev = this.head

            for (let i = 0; i < index - 1; i++) {

                prev = prev.next

            }

            node.next = prev.next

            prev.next = node

            this.size++
        }
    }

    removeNode(index) {
        if (index < 0 || index >= this.size) return null
        let remove
        if (index === 0) {
            remove = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            remove = prev.next
            prev.next = remove.next
        }
        this.size--
    }

    reverse() {
        let prev = null   // first set reversed last value
        let cur = this.head   //set curr as head
        while (cur) {
            let nxt = cur.next  //set next 
            cur.next=prev  // set next node as prev
            prev = cur    //move forward
            cur = nxt  //move next
        }
        this.head = prev  //set head to the last value
    }
    search(data) {
        if (this.isEmpty()) {
            return -1
        } else {
            let i = 0
            let cur = this.head
            while (cur) {
                if (cur.data === data)
                    return i
                else {
                    cur = cur.next
                    i++

                    
                }
            }
        }
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.data === value) {
            this.head = this.head.next
            this.size--
            return
        } else {
            let prev = this.head
            while (prev.next.data !== value) {
                prev = prev.next
            }
            if (prev.next) {
                let remove = prev.next
                prev.next = remove.next
                this.size--
                return
            } else {
                return null
            }
        }
    }

    printList() {
        if (this.isEmpty()) {
            console.log('List is Empty')
        } else {
            let cur = this.head
            let values = ''
            while (cur) {
                values += ` ${cur.data}`
                cur = cur.next
            }
            console.log(values)
        }
    }
}


const list = new LinkedList()

list.printList()




let arr = [1, 2, 3, 4, 5, 6, 7]
for (let num of arr) list.addNodeLast(num)

list.printList()


list.reverse()


list.printList()





