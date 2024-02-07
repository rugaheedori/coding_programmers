function solution(n, edge) {
  // n * n array 만들기
  const arr = Array.from(Array(n), () => new Set());
  // vertex = edge에 따라 값 설정해주기
  edge.forEach((x) => {
    const [v1, v2] = x;

    arr[v1 - 1].add(v2);
    arr[v2 - 1].add(v1);
  });
}

console.log(
  "answer: ",
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
