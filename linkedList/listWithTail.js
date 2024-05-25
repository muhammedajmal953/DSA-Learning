

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

    zeroSize() {
        return this.size===0
    }
    prepend(value) {
        let node = new Node(value)
        if (this.zeroSize) {
            this.head = node
            this.tail=node
        } else {
            node.next = this.head
            this.head=node         
        }

        this.size++
    }
    append(value) {
        let node=new Node(value)
        if (this.zeroSize()) {
            this.head = node
            this.tail=node
        } else {
            this.tail.next = node
            this.tail=node
        }
        this.size++
    }

    removeFromFront() {
        if (this.zeroSize()) {
            return null
        } else {
            this.head = this.head.next       
        }
        this.size--
    }
    removeFromEnd() {
        if (this.zeroSize()) {
            return null
        } 
        if (this.size === 1) {
            this.head = null
            this.tail=null
        } else {
            let prev = this.head
            
            while (prev.next!==this.tail) {
                prev=prev.next
            }
            this.tail = prev
            prev.next=null
        }
        this.size--
    }
    print() {

        if (this.zeroSize()) {
            return 'No Values'
        }
        let cur = this.head
        let value=''
        while (cur) {
            value += cur.data+' ' 
            
            cur=cur.next
        }

        return value

    }
}



let list = new LinkedList()

let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(list.print());
for (let num of arr) list.append(num)
    list.removeFromEnd()
console.log(list.print());
    
