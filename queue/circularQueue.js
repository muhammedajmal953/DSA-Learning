

class Circular{

    constructor(size) {
        this.queue = new Array(size)
        this.capacity=size
        this.currentLength=0
        this.front = 0
        this.rear=0
    }

    enqueue(val) {
        if (this.currentLength === this.capacity) return console.log('que is full')
        
        this.queue[this.rear] = val
        this.rear+=1

        this.currentLength++
    }
    dequeue() {
        this.queue.shift()
        this.currentLength--
    }
    peek() {
        if(this.currentLength===0) return 'Stack is empty'
        return this.queue[0]
    }
    isEmpty() {
        return this.currentLength===0  
    }
    size() {
        return this.queue.length
    }
    rear() {
        return this.queue[this.queue.length-1]
    }
    full() {
        return this.currentLength===this.capacity
    }
    print() {
        if (this.isEmpty()) {
            return 'Empty'
        }
        let values=''
        for (let ele of this.queue) {
            if (ele) {
                values+=ele+' '
            }
        }
        return values
    }
    
}



let queue = new Circular(4)

console.log(queue.print());


queue.enqueue(4)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(6)

console.log(queue.print());
queue.dequeue()
console.log(queue.print());
queue.dequeue()
console.log(queue.print());
