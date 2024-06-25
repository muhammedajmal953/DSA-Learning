

class heap{
    constructor() {
      this.heap=[]
    }
    

    insert(val) {
        this.heap.push(val)

        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2)
        
        if (parent >= 0 && this.heap[parent] > this.heap[index]) {
            [this.heap[index], this.parent[parent]] = [this.heap[parent], this.parent[index]]
            this.heapifyUp(parent)
        }
    }
    
}