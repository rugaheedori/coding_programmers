function solution(s) {
  const correctChar = ['[]', '()', '{}'];
  const brackets = s.split('');
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stacking = [];

    brackets.forEach((bracket) => {
      if (correctChar.includes(stacking[stacking.length - 1] + bracket)) {
        stacking.pop();
        return;
      }
      stacking.push(bracket);
    });

    if (!stacking.length) answer += 1;

    brackets.push(brackets.shift());
  }
  return answer;
}
