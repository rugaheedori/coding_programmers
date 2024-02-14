function solution(numbers, target) {
  let answer = 0;

  function dfs(idx, value) {
    if (idx !== numbers.length) {
      dfs(idx + 1, value + numbers[idx]);
      dfs(idx + 1, value - numbers[idx]);
    } else {
      if (target === value) {
        answer += 1;
      }
    }
  }

  dfs(0, 0)
  return answer;
}
