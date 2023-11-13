function solution(numbers) {
  let sum = 45;

  numbers.forEach((v) => {
    sum -= v;
  });
  return sum;
}
