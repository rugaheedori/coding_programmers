function solution(n, t, m, p) {
  const answer = [];
  let i = 0;
  let order = 1;

  while (answer.length < t) {
    i.toString(n)
      .split('')
      .forEach((num) => {
        if (answer.length >= t) return;
        if (order === p) answer.push(num.toUpperCase());

        order++;

        if (order > m) order = 1;
      });

    i++;
  }
  return answer.join('');
}
