function solution(n, left, right) {
  const answer = [];

  for (let i = left; i < right + 1; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return answer;
}
