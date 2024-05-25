

class Node{
    constructor(data) {
        this.data = data
        this.next=0
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.size=0
    }

    isEmpty() {
        return this.size===0
    }

    enqueue(val) {
        let node = new Node(val)
            
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            
        } else {
            this.tail.next = node
            this.tail=node
        }
        this.size++

    }
    dequeue() {
        if (this.isEmpty()) return 'Queue is Empty'

        if (this.size === 1) {
            this.tail = null
            this.head = null
        } else {
           this.head=this.head.next
        }
        this.size--
    }
    peek() {
        return this.head
    }

    print() {
        
        let cur = this.head
        
        let values = ''
        
        if (this.isEmpty()) return 'Queue is empty'
        
        while (cur) {
            values += cur.data + ' '
            cur=cur.next
        }

        return values
    }
}




let queue = new Queue()

console.log(queue.print());


queue.enqueue(4)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(6)

console.log(queue.print());


queue.dequeue()

console.log(queue.print());
