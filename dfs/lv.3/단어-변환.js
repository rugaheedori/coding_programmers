function solution(begin, target, words) {
  let answer = 0;

  dfs(begin, new Set(), 0);

  function dfs(begin, visited, value) {
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
          dfs(next, visited.add(next), value + 1);
        }
      }
    }
  }

  return answer;
}
