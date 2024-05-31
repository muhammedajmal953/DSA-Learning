
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

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.val);
            this.inOrder(root.right)
        }
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
    isBst(root, min, max) {
        if (!root) return true
        if (root.val < min || root.val > max) return false
        return this.isBst(root.left, min, root.val - 1) && this.isBst(root.right, root.val + 1, max)
    }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(15)




tree.levelOrder()




