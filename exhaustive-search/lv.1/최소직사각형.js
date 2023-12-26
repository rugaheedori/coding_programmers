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

function solution(sizes) {
  const [max, min] = sizes.reduce(
    ([max, min], [a, b]) => {
      return [Math.max(max, Math.max(a, b)), Math.max(min, Math.min(a, b))];
    },
    [0, 0]
  );

  return max * min;
}
