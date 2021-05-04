class Graphs_DS {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if ( !this.adjacencyList[vertex] ) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    //todo conditions
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    )
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    )
  }
  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirst(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    //Check is there vertex
    //Set vertex is visited in visited and push it to result
    //Do recursive traversal of the neighbors of a vertex using the algorithm
    //Return result
    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      });
    })(start);

    return result;
  }

  //return result;
  //while queue is not empty
  //get and remove first element from queue
  //push it to result
  //traverse the array and set not visited neighbor true and push it to queue
  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result
  }
}

export default Graphs_DS;