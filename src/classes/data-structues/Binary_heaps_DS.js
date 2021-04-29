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
  extractMax() {
    const max = this.values[0];
    const last = this.values.pop();
    this.values[0] = last;
    this.sinkDown();
    return max
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild;
      let swap = null;
      if ( leftChildIndex < length ) {
        leftChild = this.values[leftChildIndex]
        if ( leftChild > element ) {
          swap = leftChildIndex;
        }
      }
      if ( rightChildIndex < length ) {
        rightChild = this.values[rightChildIndex]
        if ((swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild) ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break
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
