

class Node{
    constructor(data) {
        this.data = data
        this.next=null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size=0
    }

    isEmpty() {
        return this.size===0
    }

    findSize() {
        return this.size
    }
   
    addNode(data) {
        let node = new Node(data)
        if (this.isEmpty()) {
            this.head = node  
        } else {
            node.next = this.head
            this.head=node
        }
        this.size++
    }

    addNodeEnd(data) {
        let node = new Node(data)
        if (this.isEmpty()) {
            this.head=node
        } else {
            let prev = this.head
            while (prev.next) {
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

    showNodes() {
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            let cur = this.head
            let listValues = ''
            while (cur) {
                listValues += `${cur.data} `
                cur=cur.next
            }

            console.log(listValues);
        }
    }
}

const list = new LinkedList()
list.showNodes()


list.addNodeEnd('World')

list.showNodes()


