
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class GenetralTree {
    constructor() {
        this.root = null
    }


    insert(val) {
        let newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root

        while (true) {
            if (val === current.data) return undefined

            if (val < current.data) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left

            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current=current.right
            }

        }
    }
    find(val) {
        if (this.root === null) return false
        
        let current = this.root, found = false
        
        while (current, !found) {
            if (val < current.data) {
               current=current.left
            } else if (val > current.data) {
                current=current.right
            } else {
                found=true
            }
            
        }
        if (!found) return undefined
        return current
    }
}

let tree = new GenetralTree()

tree.insert(10)
tree.insert(11)
tree.insert(9)
tree.insert(8)
tree.insert(15)
tree.insert(14)


console.log('find the node',tree.find(11));