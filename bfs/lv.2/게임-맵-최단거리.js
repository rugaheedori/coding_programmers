function solution(maps) {
  const queue = [[0, 0, 0]];
  const visited = new Set(["0,0"]);
  let answer = -1;
  const col = maps[0].length - 1;
  const row = maps.length - 1;

  while(queue.length) {
    const [y, x, value] = queue.shift();

      bfs(y, x, value);
  }

  function bfs(y, x, value) {
    if (x === col && y === row) {
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
      // 범위 내 && 벽이 아님 && 방문한 적 없음
      if (
        x >= 0 &&
        x <= col &&
        y >= 0 &&
        y <= row &&
        maps[y][x] &&
        !visited.has(`${y},${x}`)
      ) {
        queue.push([y, x, value + 1]);
        visited.add(`${y},${x}`);
      }
    }
  }

  return answer;
}
