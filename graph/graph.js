

class Graph{
    constructor() {
        this.adjList={}
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex]=new Set()
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        if (!this.adjList[vertex1].has(vertex2) || !this.adjList[vertex2].has(vertex1)) {
            return false
        }
        return this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1)
    }

    Dfs(start, visited = new Set()) {
        
        visited.add(start)

        

        for(let vertex of this.adjList[start]) {
            if (!visited.has(vertex)) {
                this.Dfs(vertex,visited)
            }
            if (start === vertex) {
                return vertex
            }
        }


    }

    bfs(start) {
        let queue = [start]
     
        let visited = new Set()
        
        visited.add(start)

        while (queue.length > 0) {
            let current = queue.shift()
            console.log(current);
            for (let next of this.adjList[current]) {
                if (!visited.has(next)) {
                    visited.add(next)
                    queue.push(next)
                }
                
            }
        }
        
    }

    display() {
        let i=1
        for (let vertex in this.adjList) {
   
            console.log(vertex + ' -> ' + [...this.adjList[vertex]])
            i++
        }
    }

    shotrtestDistance(start,end){
        let  distance=0
        let queue=[[start,distance]]

        let visited=new Set()

        visited.add(start)

        while(queue.length>0){
            let [current,distance]=queue.shift()

            if(current===end){
                return distance
            }

            for(let next of this.adjList[current]){
                if(!visited.has(next)){
                    visited.add(next)
                    queue.push(next,distance+1)
                }
            }
        }
       
    }

    highestEdges(){
        let result=''
        let len=0
      for(let item in this.adjList){
          if(this.adjList[item].length>len){
              len=this.adjList[item].length
              result=item
          }
      }
     return result
    }
    
    removeVertex(vertex) {
        if (!this.adjList[vertex]) {
            return
        }
        for (let next of this.adjList[vertex]) {
            this.adjList[next].delete(vertex)
        }
        delete this.adjList[vertex]
    }


    countingCycles(start) {
        let visited = new Set()
        let parent = new Map()
        let stack = [start]
        
        let count = 0
        
        while (stack.length) {
            let cur = stack.pop()
            
            visited.add(cur)
            for (let next of this.adjList[cur]) {
                if (!visited.has(next)) {
                    visited.add(next)
                    parent.set(next, cur)
                    stack.push(next)
                } else if(parent.get(cur) !== next) {
                    count++
                }
            }
        }

        return count/2
    }
    
    smallestDistance(start, end) {
        let distance = 0
        
        let visited = new Set()
        let queue = [[start, distance]]
        visited.add(start)
        
        while (queue.length) {
            let [cur, distance] = queue.shift()
            
            if (cur === end) {
                return distance
            }
            for (let next of this.adjList[cur]) {
                if (!visited.has(next)) {
                    visited.add(next)
                    queue.push([next,distance+1])
                }
            }
        }
    }
   
}


let graph = new Graph()

graph.addEdges('a','b')
graph.addEdges('a','c')
graph.addEdges('a','d')
graph.addEdges('b','e')
graph.addEdges('c','f')
graph.addEdges('d','g')
graph.addEdges('e','a')
graph.addEdges('f','i')
graph.addEdges('g','j')
graph.addEdges('h','k')
graph.addEdges('i','l')
graph.addEdges('j','m')
graph.addEdges('k','n')
graph.addEdges('l','o')
graph.addEdges('m','p')
graph.addEdges('n','q')
graph.addEdges('o','r')
graph.addEdges('p','s')
graph.addEdges('q','t')
graph.addEdges('r', 'u')

console.log(graph.countingCycles('a'))

console.log(graph.smallestDistance('a','u'));

graph.display()




