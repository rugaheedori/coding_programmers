function solution(n, left, right) {
  const answer = [];

  for (let i = left; i < right + 1; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return answer;
}

const n = 3;
const left = 2;
const right = 5;

console.log(solution(n, left, right));
