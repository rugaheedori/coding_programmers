function solution(n, computers) {
  let answer = 0;
  const visited = new Set();

  for (let i = n - 1; i >= 0; i--) {
    // 해당 조건문이 실행 되는 수 = 네트워크 개수.
    if (!visited.has(i)) {
      visited.add(i);
      dfs(i);
      answer += 1;
    }
  }

  function dfs(n) {
    computers[n].forEach((x, idx) => {
      // 연결되어 있으나 방문한 적 없어야 함.
      if (x && !visited.has(idx)) {
        visited.add(idx);
        dfs(idx);
      }
    });
  }

  return answer;
}
