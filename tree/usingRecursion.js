

class Node{
    constructor(val) {
        this.val = val
        this.left = null
        this.right=null
    }
}



class Tree{
    constructor() {
        this.root=null
    }

    insert(val) {
        let newNode=new Node(val)
        if (this.root === null) {
            this.root=newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root, newNode) {
        if (root.val > newNode.val) {
            if (root.left === null) {
                root.left=newNode
            } else {
                this.insertNode(root.left,newNode)
            }
        } else {
            if (root.right === null) {
                root.right=newNode
            } else {
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } if(root.val===value) return true
        else if (root.val > value) {
           
                return this.search(root.left,value)
            
        } else {
           
          return this.search(root.right,value)
           
        }
       
    }

}


let tree = new Tree()

tree.insert(10)
tree.insert(11)
tree.insert(9)
tree.insert(8)
tree.insert(15)
tree.insert(14)


console.log('find the node',tree.search(tree.root,20));