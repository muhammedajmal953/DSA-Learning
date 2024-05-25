

//basic stack implementaion

class Stack{
    constructor() {
        this.items = []
    }

    push(ele) {
       return this.items.push(ele)

    }

    pop() {
        if (this.isEmpty()) {
            return 'stack is empty'
        }
       return this.items.pop()
    }

    peek() {
        if (this.isEmpty()) return 'Stack is Empty'

        return this.items[this.items.length-1]
    }

    isEmpty() {
        return this.items.length===0
    }

    size() {
        return this.items.length
    }

    print() {
        if (this.isEmpty()) return 'Stack is empty'
        
       return this.items.toString()
       
    }
}


const stack = new Stack()

stack.push(23)
stack.push(24)
stack.push(25)
stack.push(26)


stack.pop()
stack.pop()

console.log(stack.peek());


console.log(stack.print()); 