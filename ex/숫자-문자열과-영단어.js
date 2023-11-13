function solution(s) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let answer = [];
  let num = '';

  for (let i = 0; i < s.length; i++) {
    Number(s[i]) >= 0 ? answer.push(s[i]) : (num += s[i]);
    if (numbers.includes(num)) {
      answer.push(numbers.indexOf(num));
      num = '';
    }
  }
  return Number(answer.join(''));
}
