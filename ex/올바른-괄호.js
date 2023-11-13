function solution(s) {
  const brackets = [];

  s.split('').forEach((bracket, idx) => {
    if (idx) {
      if (brackets[brackets.length - 1] + bracket === '()') {
        brackets.pop();
        return;
      }
    }
    brackets.push(bracket);
  });
  return brackets.length ? false : true;
}
