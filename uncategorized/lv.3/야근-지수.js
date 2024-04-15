function solution(n, works) {
  const cntMap = works.reduce((a, b) => {
    return a.set(b, (a.get(b) || 0) + 1);
  }, new Map());

  while (n) {
    const max = Math.max(...Array.from(cntMap.keys()));

    if (max <= 0) {
      return 0;
    }

    const maxCnt = cntMap.get(max);

    if (maxCnt - n > 0) {
      cntMap.set(max, maxCnt - n);
      cntMap.set(max - 1, (cntMap.get(max - 1) || 0) + n);
      break;
    } else {
      cntMap.delete(max);
      cntMap.set(max - 1, (cntMap.get(max - 1) || 0) + maxCnt);
      n = n - maxCnt;
    }
  }

  let answer = 0;

  for (let [work, cnt] of cntMap) {
    answer += work ** 2 * cnt;
  }

  return answer;
}
