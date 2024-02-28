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

  insert(job) {
    this.heap.push(job);
    let currentIdx = this.size() - 1;

    while (currentIdx > 0) {
      const current = this.heap[currentIdx];
      const parents = this.heap[Math.floor((currentIdx - 1) / 2)];

      const currentToParents =
        current[0] + (current[0] + current[1] - parents[0]);
      const parentsToCurrents =
        parents[0] + (parents[0] + parents[1] - current[0]);

      if (currentToParents < parentsToCurrents) {
        this.swap(
          currentIdx,
          current,
          Math.floor((currentIdx - 1) / 2),
          parents
        );

        currentIdx = Math.floor((currentIdx - 1) / 2);
      } else {
        break;
      }
    }
  }

  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const process = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIdx = 0;

    return process;
  }
}

function solution(jobs) {
  const minHeap = new MinHeap();

  jobs.forEach((x) => {
    minHeap.insert(x);
  });

  let process = 0;
  let endPoint = 0;

  while (minHeap.size()) {
    const [req, time] = minHeap.extract();

    if (endPoint <= req) {
      process += req - endPoint + time;
      endPoint += req - endPoint + time;
    } else {
      process += endPoint - req + time;
      endPoint += time;
    }
  }

  return Math.floor(process / jobs.length);
}
