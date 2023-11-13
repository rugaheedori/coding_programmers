function solution(n) {
  return n %
    String(n)
      .split('')
      .reduce((a, b) => a * 1 + b * 1)
    ? false
    : true;
}
