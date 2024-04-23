// using heap
class MaxHeap {
  constructor() {
    this.heap = [];
    this.heapCnt = 0;
  }

  insert(num) {
    this.heap.push(num);
    this.heapCnt += 1;
    this.upHeap();
  }

  swap(changeIdx, change, currentIdx, current) {
    this.heap[changeIdx] = current;
    this.heap[currentIdx] = change;
  }

  upHeap() {
    let currentIdx = this.heapCnt - 1;
    let current = this.heap[currentIdx];

    while (currentIdx > 0) {
      let parentIdx = Math.floor(currentIdx / 2);
      let parent = this.heap[parentIdx];

      if (current <= parent) {
        break;
      }

      this.swap(parentIdx, parent, currentIdx, current);
      current = this.heap[parentIdx];
      currentIdx = parentIdx;
    }
  }

  downHeap(currentIdx) {
    let current = this.heap[currentIdx];

    while (currentIdx < Math.floor(this.heapCnt % 2)) {
      let childIdx;

      if (currentIdx === 0) {
        childIdx = 1;
      } else {
        childIdx = (currentIdx + 1) * 2 - 1;
      }

      if (
        childIdx + 1 < this.heapCnt &&
        this.heap[currentIdx] < this.heap[currentIdx + 1]
      ) {
        childIdx = childIdx + 1;
      }

      if (current < this.heap[childIdx]) {
        this.swap(childIdx, this.heap[childIdx], currentIdx, current);
      }

      current = this.heap[childIdx];
      currentIdx = childIdx;
    }
  }

  extractMax() {
    if (!this.heapCnt) {
      return null;
    }

    const max = this.heap[0];

    this.heap[0] = this.heap[this.heapCnt - 1];
    this.heap.pop();
    this.heapCnt -= 1;

    if (this.heapCnt > 0) {
      this.downHeap(0);
    }

    return max;
  }

  extractMin() {
    if (!this.heapCnt) {
      return null;
    }

    const min = Math.min(...this.heap);
    const minIdx = this.heap.lastIndexOf(min);

    let currentIdx = minIdx;
    let current = this.heap[currentIdx];

    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (parent >= current) {
        break;
      }

      this.swap(parentIdx, parent, currentIdx, current);
      currentIdx = parentIdx;
      current = parent;
    }

    this.heap[minIdx] = this.heap[this.heapCnt - 1];
    this.heap.pop();
    this.heapCnt -= 1;

    return min;
  }
}

function solution(operations) {
  const maxHeap = new MaxHeap();

  operations.forEach((x) => {
    const [command, number] = x.split(" ");

    if (command === "I") {
      maxHeap.insert(number * 1);
    } else {
      if (number === "1") {
        maxHeap.extractMax();
      } else {
        maxHeap.extractMin();
      }
    }
  });

  const max = maxHeap.extractMax() || 0;
  const min = maxHeap.extractMin() || max;

  return [max, min];
}

function solution(operations) {
  const queue = [];

  operations.forEach((x) => {
    const [command, number] = x.split(" ");

    if (command === "I") {
      queue.push(number * 1);
      queue.sort((a, b) => b - a);
    } else {
      number === "1" ? queue.shift() : queue.pop();
    }
  });

  return [queue[0] || 0, queue.pop() || 0];
}
