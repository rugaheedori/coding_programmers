function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(idx, value) {
    if (idx !== numbers.length) {
      dfs(idx + 1, value + numbers[idx]);
      dfs(idx + 1, value - numbers[idx]);
    } else if (value === target) {
      answer += 1;
    }
  }
  return answer;
}
