function solution(edges) {
  const map = new Map();

  edges.forEach(([from, to]) => {
    if (!map.get(from)) {
      map.set(from, [0, 0]);
    }

    if (!map.get(to)) {
      map.set(to, [0, 0]);
    }

    map.get(from)[0] += 1; //outside
    map.get(to)[1] += 1; //inside
  });
  const answer = [0, 0, 0, 0];

  for ([k, [outside, inside]] of map) {
    if (outside >= 2 && inside === 0) {
      answer[0] = k;
    }
    // 막대 그래프
    else if (outside === 0 && inside >= 1) {
      answer[2] += 1;
    }
    // 8자 그래프
    else if (outside === 2 && inside >= 2) {
      answer[3] += 1;
    }
  }

  // 도넛 그래프
  answer[1] = map.get(answer[0])[0] - answer[2] - answer[3];

  return answer;
}
