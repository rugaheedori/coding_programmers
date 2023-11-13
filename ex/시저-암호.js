function solution(s, n) {
  const answer = [];

  s.split('').forEach((v) => {
    if (v === ' ') answer.push(' ');
    else if (v.charCodeAt(0) <= 90 && v.charCodeAt(0) + n > 90) {
      answer.push(String.fromCharCode(v.charCodeAt(0) + n - 26));
    } else if (v.charCodeAt(0) <= 122 && v.charCodeAt(0) + n > 122) {
      answer.push(String.fromCharCode(v.charCodeAt(0) + n - 26));
    } else {
      answer.push(String.fromCharCode(v.charCodeAt(0) + n));
    }
  });

  return answer.join('');
}

const s = 'a B z';
const n = 4;
