



class Node{
    constructor(data) {
        this.data = data
        this.next=null
    }
}


class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.size=0
    }

    isEmpty() {
        return this.size===0
    }

    append(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail=node
        } else {
            this.tail.next = node
            this.tail=node
        }
        this.size++
    }

    search(data) {
        if (this.isEmpty) return null
        
        else{
            let cur = this.head
            let i = 0
            
            while (cur) {
                if (cur.data === data) {
                    return i
                }
                cur = cur.next
                i++
            }
        }
    }

    print() {
        if (this.isEmpty()) return 'List is emty'
        
        else {
            let cur = this.head
            
            let values = ''
            
            while (cur) {
                values += `${cur.data} `
                cur=cur.next
            }
            return values
        }
    }
}



const list = new LinkedList()

console.log(list.print());

list.append(5)
list.append(8)
list.append(9)
list.append(7)


console.log(list.print())

console.log(list.search(9));