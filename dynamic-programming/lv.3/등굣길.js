function solution(m, n, puddles) {
  const map = Array.from(Array(n), () => Array(m).fill(1));
  const NUMBER_FOR_DIVIDE = 1000000007;

  puddles.forEach(([column, row]) => {
    if (column === 1) {
      for (let i = row - 1; i < n; i++) {
        map[i][0] = 0;
      }
    }

    if (row === 1) {
      for (let i = column - 1; i < m; i++) {
        map[0][i] = 0;
      }
    }

    map[row - 1][column - 1] = 0;
  });

  for (let row = 1; row < n; row++) {
    for (let column = 1; column < m; column++) {
      if (map[row][column]) {
        map[row][column] =
          (map[row - 1][column] + map[row][column - 1]) % NUMBER_FOR_DIVIDE;
      }
    }
  }

  return map[n - 1][m - 1] % NUMBER_FOR_DIVIDE;
}

// 효율성 통과 x : 불필요한 함수 호출이 많음.
function solution(m, n, puddles) {
    let answer = 0;
  
    function bfs(x, y, value, visited) {
      if (x > m || y > n || visited.has(`${x}${y}`)) return;
  
      if (x === m && y === n) {
        answer += 1;
      } else {
        bfs(x + 1, y, value + 1, new Set([...visited, `${x}${y}`]));
        bfs(x, y + 1, value + 1, new Set([...visited, `${x}${y}`]));
      }
    }
  
    bfs(1, 1, 0, new Set(puddles.map((x) => x.join(""))));
  
    return answer % 1000000007;
  }