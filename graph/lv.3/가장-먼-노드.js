function solution(n, edge) {
  let maxDepth = 0;
  let answer = 0;
  const map = new Map();
  const visited = new Set([1]);
  const queue = [[1, 0]];

  while (edge.length) {
    const [a, b] = edge.pop();

    if (map.get(a) == null) {
      map.set(a, new Set([b]));
    } else {
      map.set(a, new Set([...map.get(a), b]));
    }

    if (map.get(b) == null) {
      map.set(b, new Set([a]));
    } else {
      map.set(b, new Set([...map.get(b), a]));
    }
  }

  while (queue.length) {
    const [current, depth] = queue.shift();

    dfs(current, depth);
  }

  function dfs(node, depth) {
    for (let x of map.get(node).values()) {
      if (!visited.has(x)) {
        visited.add(x);
        queue.push([x, depth + 1]);
      }
    }

    if (depth > maxDepth) {
      maxDepth = depth;
      answer = 1;
    } else if (depth === maxDepth) {
      answer += 1;
    }
  }

  return answer;
}
