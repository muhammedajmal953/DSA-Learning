

class Heap {
    constructor() {
        this.heap = []
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1
    }
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(val) {
        let length = this.heap.length
        this.heap.push(val)
        this.heapifyUp(length - 1)
    }


    heapifyUp(index) {
        if (this.hasParent(index) && this.heap[this.getParentIndex(index) > this.heap[index]]) {
            this.swap(index, this.getParentIndex(index))
            this.heapifyUp(this.getParentIndex(index))
        }
    }

    removeMin() {
        if (this.heap.length === 0) {
            return null;
        }

        const minElement = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0);

        return minElement;
    }



    heapifyDown(index) {
        let smallestIndex = index;

        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);

        if (this.hasLeftChild(index) && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }

        if (this.hasRightChild(index) && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            this.swap(index, smallestIndex);
            this.heapifyDown(smallestIndex); // Recursive call
        }
    }

    heapSort() {
        const sortedArray = [];
        const heapLength = this.heap.length;

        for (let i = 0; i < heapLength; i++) {
            sortedArray.push(this.removeMin());
        }

        return sortedArray;
    }

}

let heap = new Heap()

heap.insert(10)
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(50)
heap.insert(60)
heap.insert(70)
heap.insert(80)
heap.insert(90)
heap.insert(100)
heap.insert(110)
heap.insert(120)


console.log(heap.heap);



console.log(heap.heapSort());
