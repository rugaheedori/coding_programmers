function solution(n, times) {
  let answer = 0;
  let minTime = Math.min(...times);
  let maxTime = Math.max(...times) * n;

  while (minTime <= maxTime) {
    const mid = Math.floor((minTime + maxTime) / 2);

    let checkPerson = 0;
    for (const time of times) {
      checkPerson += Math.floor(mid / time);

      if (checkPerson >= n) {
        break;
      }
    }

    if (checkPerson >= n) {
      answer = mid;
      maxTime = mid - 1;
    } else {
      minTime = mid + 1;
    }
  }

  return answer;
}
