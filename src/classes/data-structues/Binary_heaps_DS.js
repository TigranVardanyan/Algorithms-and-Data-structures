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
    if( this.values.length > 0 ) {
      this.values[0] = last;
      this.sinkDown();
    }
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
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
}


let heap = new Binary_heaps_DS();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(JSON.parse(JSON.stringify(heap)))
heap.extractMax()
console.log(JSON.parse(JSON.stringify(heap)))

export default Binary_heaps_DS
