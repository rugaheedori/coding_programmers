function solution(k, tangerine) {
  const cnt = new Map();
  let answer = 0;

  tangerine.forEach((x) => {
    cnt.set(x, (cnt.get(x) || 0) + 1);
  });

  for (let c of Array.from(cnt.values()).sort((a, b) => b - a)) {
    answer += 1;
    k -= c;

    if (k === 0 || k < 0) {
      break;
    }
  }

  return answer;
}
