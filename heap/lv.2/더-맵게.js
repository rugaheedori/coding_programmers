class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(a, av, b, bv) {
    this.heap[a] = bv;
    this.heap[b] = av;
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
    ) {
      this.swap(
        currentIndex,
        this.heap[currentIndex],
        Math.floor((currentIndex - 1) / 2),
        this.heap[Math.floor((currentIndex - 1) / 2)]
      );
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {
      let minChildIndex =
        currentIndex * 2 + 2 < this.heap.length &&
        this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1]
          ? currentIndex * 2 + 2
          : currentIndex * 2 + 1;

      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      this.swap(
        currentIndex,
        this.heap[currentIndex],
        minChildIndex,
        this.heap[minChildIndex]
      );
      currentIndex = minChildIndex;
    }

    return minValue;
  }

  min() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  scoville.forEach((x) => {
    minHeap.insert(x);
  });

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.min() < K) {
    const first = minHeap.extract();
    const second = minHeap.extract();
    const mixed = first + second * 2;

    minHeap.push(mixed);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}
