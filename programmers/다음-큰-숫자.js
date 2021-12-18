function solution(n) {
  const cntOne = n
    .toString(2)
    .split('')
    .filter((x) => x === '1').length;

  while (1) {
    n += 1;

    if (
      n
        .toString(2)
        .split('')
        .filter((x) => x === '1').length === cntOne
    )
      break;
  }
  return n;
}

console.log(solution(78));
