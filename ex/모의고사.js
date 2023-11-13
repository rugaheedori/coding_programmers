function solution(answers) {
  const manOne = [1, 2, 3, 4, 5];
  const manTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const manThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const results = [
    answers.filter((answer, idx) => manOne[idx % 5] === answer).length,
    answers.filter((answer, idx) => manTwo[idx % 8] === answer).length,
    answers.filter((answer, idx) => manThree[idx % 10] === answer).length,
  ];

  return results
    .map((result, idx) => {
      if (result === Math.max(...results)) {
        return idx + 1;
      }
    })
    .filter((el) => el);
}
