function solution(n) {
  return String(Math.sqrt(n)).split('.').length > 1
    ? -1
    : (Math.sqrt(n) + 1) ** 2;
}
