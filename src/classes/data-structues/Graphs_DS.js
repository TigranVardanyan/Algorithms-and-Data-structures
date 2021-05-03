class Graphs_DS {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if ( !this.adjacencyList[vertex] ) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge() {
    
  }
}

export default Graphs_DS;