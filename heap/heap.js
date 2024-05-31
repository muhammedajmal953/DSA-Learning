

class Heap{
    constructor() {
        this.heap=[]
    }

    getLeftChildIndex(parentIndex) {
        return 2*parentIndex+1
    }
    getRightChildIndex(parentIndex) {
        return 2*parentIndex+2
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex-1)/2)
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index)<this.heap.length
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index)<this.heap.length
    }

    hasParent(index) {
        return this.getParentIndex(index)>=0
    }

    swap(index1, index2) {
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index2]]
    }

    insert(val) {
        this.heap[this.heap.length - 1] = val
        this.heapifyUp()
    }


    heapifyUp() {
        
    }
}