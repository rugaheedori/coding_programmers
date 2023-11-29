function solution(arrows) {
  let answer = 0;
  let currentSpot = [0, 0];
  // 방문한 점
  const visitedSpot = new Set([currentSpot.join(",")]);
  // 방문한 경로
  const visitedRoute = new Set();
  const x = [0, 1, 1, 1, 0, -1, -1, -1];
  const y = [1, 1, 0, -1, -1, -1, 0, 1];

  for (const arrow of arrows) {
    // 2번씩 이동해야 대각선끼리 겹치는 점의 위치를 정의할 수 있음.
    for (let i = 0; i < 2; i++) {
      const nextSpot = [currentSpot[0] + x[arrow], currentSpot[1] + y[arrow]];

      // 해당 점을 이미 지났고 해당 경로가 없는 경우 -> 방 추가 및 점과 경로를 추가
      if (
        visitedSpot.has(nextSpot.join(",")) &&
        !visitedRoute.has([nextSpot, currentSpot].join(",")) &&
        !visitedRoute.has([currentSpot, nextSpot].join(","))
      ) {
        answer += 1;
      }

      // 해당 점을 지나가지 않았거나 지났는데 경로가 있는 경우 -> 점과 경로만 추가하면 됨
      visitedSpot.add(nextSpot.join(","));
      visitedRoute.add([nextSpot, currentSpot].join(","));
      visitedRoute.add([currentSpot, nextSpot].join(","));
      currentSpot = nextSpot;
    }
  }

  return answer;
}
