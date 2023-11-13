function solution(n) {
  let answer = 0;

  for (let i = 1; i < Math.floor(n / 2) + 1; i++) {
    let sum = 0;

    for (let j = i; j < Math.floor(n / 2) + 2; j++) {
      sum += j;
      if (sum === n) {
        answer += 1;
        break;
      }

      if (sum > n) break;
    }
  }
  return answer + 1;
}
