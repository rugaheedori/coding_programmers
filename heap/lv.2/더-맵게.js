function solution(scoville, K) {
  let answer = -1;
  const heap = new Map();

  scoville.forEach((x, idx) => {
    let currentIdx = idx;
    let current = x;

    heap.set(idx, x);

    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) % 2);
      const parent = heap.get(parentIdx);

      if (current > parent) {
        break;
      }

      heap.set(idx, parent);
      heap.set(parentIdx, x);

      currentIdx = parentIdx;
      current = parent;
    }
  });

  let cnt = 0;

  while (heap.size) {
    cnt += 1;

    const min = heap.get(0);
    const nextMin = heap.get(1);
    const mixed = min + nextMin * 2;

    if (K <= mixed) {
      break;
    }

    let currentIdx = 0;
    let current = mixed;

    heap.set(currentIdx, mixed);

    while (currentIdx < Math.floor(heap.size % 2)) {
      let childIdx = (currentIdx + 1) * 2 - 1;

      if (
        childIdx + 1 < heap.size &&
        heap.get(childIdx) > heap.get(childIdx + 1)
      ) {
        childIdx += 1;
      }

      if (heap.get(childIdx) < current) {
        heap.set(currentIdx, heap.get(childIdx));
        heap.set(childIdx, current);
      }

      current = heap.get(childIdx);
      currentIdx = childIdx;
    }
  }

  return cnt || answer;
}
