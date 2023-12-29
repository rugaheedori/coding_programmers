function solution(answers) {
  const st1 = answers.filter((x, i) => [1, 2, 3, 4, 5][i % 5] === x).length;
  const st2 = answers.filter((x, i) => [2, 1, 2, 3, 2, 4, 2, 5][i % 8] === x).length;
  const st3 = answers.filter((x, i) => [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][i % 10] === x).length;

  const result = [];
  const biggest = Math.max(st1, st2, st3);

  [st1, st2, st3].forEach((x, i) => {
    if (x === biggest) {
      result.push(i + 1);
    }
  });

  return result;
}
