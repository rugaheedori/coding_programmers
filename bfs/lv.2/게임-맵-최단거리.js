function solution(maps) {
  const queue = [[0, 0, 0]];
  const visited = new Set(["0,0"]);
  let answer = -1;

  for (let i = 0; i < queue.length; i++) {
    const [y, x, value] = queue[i];

    bfs(y, x, value);
  }

  function bfs(y, x, value) {
    if (x === maps[0].length - 1 && y === maps.length - 1) {
      // 처음 도착한 경우거나, 도착한 경우 중 가장 작은 값일 때
      if (answer === -1 || answer > value + 1) {
        answer = value + 1;
      }
      return;
    }

    // 방문한 적 있는 곳은 안가도록 미리 막기
    const locations = [
      [x, y + 1],
      [x + 1, y],
      [x - 1, y],
      [x, y - 1],
    ];

    for (const [x, y] of locations) {
      // index 범위 내에 있어야 함
      if (x < 0 || x >= maps[0].length) {
        continue;
      } else if (y < 0 || y >= maps.length) {
        continue;
        // 방문한 적 있는 경우
      } else if (visited.has(`${y},${x}`)) {
        continue;
        // 벽인 경우
      } else if (maps[y][x] === 0) {
        visited.add(`${y},${x}`);
        continue;
      }
      // 방문 한 적 없어야 함.
      queue.push([y, x, value + 1]);
      visited.add(`${y},${x}`);
    }
  }

  return answer;
}
