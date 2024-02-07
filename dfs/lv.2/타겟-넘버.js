function solution(numbers, target) {
  let queue = [numbers[0], -numbers[0]];
  let nextQueue = [];

  for (let i = 1; i < numbers.length; i++) {
    while (queue.length > 0) {
      const current = queue.shift();

      nextQueue.push(current + numbers[i]);
      nextQueue.push(current - numbers[i]);
    }

    queue = [...nextQueue];

    if (i < numbers.length - 1) {
      nextQueue = [];
    }
  }

  return nextQueue.filter((x) => x === target).length;
}
