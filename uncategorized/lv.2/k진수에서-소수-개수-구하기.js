function solution(n, k) {
  let answer = 0;

  // toString() => 진수변환 제공
  n.toString(k)
    .split("0")
    .forEach((x) => {
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
