function solution(n) {
  const numbers = ['4', '1', '2'];
  let answer = '';

  while (n) {
    answer = numbers[n % 3] + answer;
    n = n % 3 ? Math.floor(n / 3) : Math.floor(n / 3) - 1;
  }
  return answer;
}
