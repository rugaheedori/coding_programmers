function solution(n, arr1, arr2) {
  return arr1.map((v, idx) =>
    (v | arr2[idx])
      .toString(2)
      .padStart(n, 0)
      .split('')
      .map((x) => (+x ? '#' : ' '))
      .join('')
  );
}
