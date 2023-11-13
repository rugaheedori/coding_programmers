function solution(citations) {
  let answer = 0;

  for (let i = 0; i <= Math.max(...citations); i++) {
    citations
      .sort((a, b) => a - b)
      .forEach((n, idx) => {
        if (i <= n && i > idx && i <= citations.length - idx) {
          answer = i;
        }
      });
  }
  return answer;
}
