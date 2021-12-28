function solution(p) {
  if (!p.length) return '';

  let cnt = 0;
  let idx = 0;

  for (let i = 0; i < p.length; i++) {
    cnt += p[i] === '(' ? 1 : -1;

    if (!cnt) {
      idx = i;
      break;
    }
  }

  const u = p.slice(0, idx + 1);
  const v = p.slice(idx + 1, p.length);

  return isCorrect(u) ? u + solution(v) : makeNewChar(u, v);
}

function isCorrect(u) {
  const stacking = [];

  u.split('').forEach((char) => {
    if (stacking[stacking.length - 1] + char === '()') {
      stacking.pop();
      return;
    }
    stacking.push(char);
  });

  return stacking.length ? false : true;
}

function makeNewChar(u, v) {
  v = solution(v);
  u = u
    .slice(1, u.length - 1)
    .split('')
    .map((x) => (x === '(' ? ')' : '('))
    .join('');

  return `(${v})${u}`;
}
