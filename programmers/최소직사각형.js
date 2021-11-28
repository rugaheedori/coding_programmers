function solution(sizes) {
  let bigger = 0;
  let smaller = 0;

  sizes.map((v) => {
    if (bigger < Math.max(...v)) {
      bigger = Math.max(...v);
    }
    if (smaller < Math.min(...v)) {
      smaller = Math.min(...v);
    }
  });

  return bigger * smaller;
}

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

console.log(solution(sizes));
