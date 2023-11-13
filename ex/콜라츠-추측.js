function solution(num) {
  let answer = 0;

  while (1) {
    if (num === 1) return 0;

    num = num % 2 ? num * 3 + 1 : num / 2;
    answer += 1;

    if (num === 1 || answer >= 500) break;
  }

  return answer >= 500 ? -1 : answer;
}
