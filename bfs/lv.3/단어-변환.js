function solution(begin, target, words) {
  let answer = 0;
  const queue = [[begin, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [next, value] = queue.shift();

    bfs(next, value);
  }

  function bfs(begin, value) {
    for (let i = 0; i < words.length; i++) {
      const next = words[i];

      if (visited.has(next)) {
        continue;
      }

      let cnt = 0;

      for (let j = 0; j < next.length; j++) {
        if (begin[j] !== next[j]) {
          cnt += 1;
        }

        if (cnt > 1) {
          break;
        }
      }

      if (cnt === 1) {
        if (next === target && (answer === 0 || answer > value + 1)) {
          answer = value + 1;
        } else {
          visited.add(next);
          queue.push([next, value + 1]);
        }
      }
    }
  }

  return answer;
}