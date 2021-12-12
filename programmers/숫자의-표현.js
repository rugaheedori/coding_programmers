function solution(n) {
  let answer = 0;
  let sum = 0;

  for (let i = 1; i < Math.floor(n / 2) + 2; i++) {
    sum += i;
    console.log(sum);
    if (sum === n) {
      sum = 0;
      answer += 1;
      break;
    }

    if (sum > n) {
      sum = 0;
      break;
    }
  }
  return answer + 1;
}

console.log(solution(15));
