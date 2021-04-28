class Binary_heaps_DS {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while ( index > 0 ) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex];
      if ( element <= parent ) break; // break loop
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
}


let heap = new Binary_heaps_DS();

heap.insert(55);
heap.insert(8);
heap.insert(15);
heap.insert(62);
heap.insert(46);
heap.insert(1);

console.log(heap)

export default Binary_heaps_DS
