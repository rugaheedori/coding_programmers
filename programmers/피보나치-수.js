function solution(n) {
  const result = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    result[i % 2] = (result[0] + result[1]) % 1234567;
  }

  return n % 2 ? result[1] : result[0];
}
