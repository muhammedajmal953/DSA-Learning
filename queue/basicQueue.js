
class Queue{
    constructor() {
        this.items=[]
    }

    enqueue(ele) {
        return this.items.push(ele)
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is Empty'
        }
        return this.items.shift()
    }

    size() {
        return this.items.length()
    }

    isEmpty() {
        return this.items===0
    }

    peek() {
        if (this.isEmpty()) return 'Queue is Empty'
        
        return  this.items[0]
    }

    print() {
        if (this.isEmpty()) return 'Queue is empty'
        
        return this.items.toString()
    }
}


let queue = new Queue()


queue.enqueue('sdfgdg')
queue.enqueue('man')
queue.enqueue('ttbggd')
queue.enqueue('mjmjm')
queue.enqueue('ajmal')




console.log(queue.peek());
console.log(queue.print());