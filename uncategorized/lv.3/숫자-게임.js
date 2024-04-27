function solution(A, B) {
  let answer = A.length;

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  while (A.length && B.length) {
    const minA = A[A.length - 1];

    while (B.length) {
      const minB = B.pop();

      if (minA < minB) {
        A.pop();
        break;
      }
    }
  }

  return answer - A.length;
}
