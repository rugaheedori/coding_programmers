function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) return a >= b ? 1 : -1;
    return a[n].charCodeAt() - b[n].charCodeAt();
  });

  return strings;
}
