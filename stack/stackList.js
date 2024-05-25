

class Node{
    constructor(val) {
        this.data = val
        this.next=null
    }
}

class stackList{
    constructor() {
        this.head = null
        this.tail = null
        this.size=0
    }
    isEmpty() {
        return this.size===0
    } 
    push(val) {
        let node = new Node(val)
       
        if (this.isEmpty()) {
            this.head = node
            this.tail=node
        } else {
            this.tail.next = node
            this.tail=node
        }
        this.size++
    }
    pop() {
        if (this.isEmpty()) return console.log('stack is Underflow')
        
        if(this.size===0){ 
            this.head = null
            this.tail = null
            console.log('stack is Under Flow now')
        } else {
            let cur = this.head
            
            while (cur.next != this.tail) {
                cur=cur.next
            }
            this.tail = cur
            this.tail.next=null
        }
        this.size--
    }

    peek() {
        return this.tail
    }

    print() {
        if (this.isEmpty()) return console.log('stack is UnderFlow')
        
        
        let cur = this.head
        let values =''
        while (cur) {
            values += cur.data + ' '
            cur=cur.next
        }

        return console.log(values)
    }

}



let stack = new stackList()

stack.push(4)
stack.push(9)
stack.push(1)
stack.push(5)
stack.push(7)

stack.print()

stack.pop()


stack.push('this is Top')
stack.print()
stack.pop()




stack.print()
