

class Node{
    constructor(data) {
        this.data = data
        this.next = null
        this.prev=null
    }
}


class ListNodes{
    constructor() {
        this.head = null
        this.tail = null
        this.size=0
    }

    isEmpty() {
        return this.size===0
    }

    append(data) {
        let node = new Node(data);

        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }
    start(data) {
        let node = new Node(data)
        
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev=node
            this.head = node
        }
        this.size++
    }

   

    print() {
        let cur = this.head
        
        let value = ' ' 
        
        while (cur) {
            value += `<-[${cur.data}]->`
            
            cur=cur.next
        }
       return  value
    }

    printReverse() {
        let cur = this.tail
        
        let value = ' ' 
        while (cur.prev) {
            value += ` ${cur.data}`
            cur=cur.prev
        }
        return  value
    }
}

const list = new ListNodes()

let arr = [1, 2, 3, 4, 5, 6, 7]


for (let num of arr) list.append(num)
    

console.log(list.printReverse());

