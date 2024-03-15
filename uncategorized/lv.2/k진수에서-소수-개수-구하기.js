function solution(n, k) {
  let convertNum = "";
  let answer = 0;

  while (n) {
    convertNum = (n % k) + convertNum;
    n = (n - (n % k)) / k;
  }

  convertNum.split("0").forEach((x) => {
    if (x >= 2) {
      for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
          answer -= 1;
          break;
        }
      }

      answer += 1;
    }
  });

  return answer;
}
