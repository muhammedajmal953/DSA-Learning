
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


class BinaryTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(val) {
        let node = new Node(val)

        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }

    }

    insertNode(root, node) {
        if (root.val > node.val) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, val) {
        if (!root) {
            return false
        }
        if (root.val === val) {
            return true
        } else if (root.val > val) {
            return this.search(root.left, val)
        } else {
            return this.search(root.right, val)
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.val)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root,arr=[]) {
        if (root) {
            this.inOrder(root.left, arr);
           
                if(root.left||root.right) arr.push(root.val)
         
            this.inOrder(root.right, arr);
        }

        return arr
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.val);
        }
    }
    levelOrder() {
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.val)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (!root) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            } else if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            } else {
                const temp = this.min(root.right);
                root.value = temp.value;
                root.right = this.deleteNode(root.right, temp.value);
            }
        }
        return root

    }
    min(root) {
        if (this.isEmpty()) {
            return null
        } if (!root.left) {
            return root.val
        } else {
            return this.min(root.left)
        }

    }
    isBST(root,min,max){

        if(!root) return true
        
        if(root.val<min||root.val>max) return false
    
    
        return this.isBST(root.left,min,root.val) &&
          this.isBST(root.right,root.val,max)
      }


    

    isPrime(num) {
        if (num < 2) return false
        if (num===2)return true
        for (let i = 2; i < num/2; i++){
            if (num % i == 0) {
                return false
            }
        }
        return true
    }

    heightOfNode(node) {
        if (node === null) {
            return 0
        }

        let leftHeight=this.heightOfNode(node.left)
        let rightHeight = this.heightOfNode(node.left)
        
        let heightDiff = Math.abs(leftHeight - rightHeight)
        
        if(heightDiff > 1) return -1

        return Math.max(leftHeight,rightHeight)+1
    }

     isBalanced(node) {
        if (node === null) {
          return true; // Empty tree is considered balanced
        }
      
        // Check left and right subtree balance recursively
        const leftBalanced = this.isBalanced(node.left);
        const rightBalanced = this.isBalanced(node.right);
      
        
        const heightDifference = Math.abs(this.heightOfNode(node.left) - this.heightOfNode(node.right));
        return leftBalanced && rightBalanced && heightDifference <= 1;
      }
      

    closest(num) {
        let arr =  this.inOrder(this.root)
        
       
        let closest = 0
        let diff = Infinity
        
        for (let i = 0; i < arr.length; i++) {
            if (Math.abs(arr[i] - num) < diff) {
                diff = Math.abs(arr[i] - num)
                closest = arr[i]
            }

        }
        return closest

    }

    secondLargest() {
        let arr = this.inOrder(this.root)

        return arr[arr.length-2]
    }

    smalltestParent() {

        return this.inOrder(this.root)[0]
    }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(15)
tree.insert(12)
tree.insert(17)
tree.insert(20)


console.log(tree.isBST(tree.root));


console.log('gfdgdf',tree.smalltestParent());




