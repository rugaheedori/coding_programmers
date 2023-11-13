function solution(n, words) {
  let answer = [0, 0];
  words.unshift(words[0][0]);

  for (let i = 1; i < words.length; i++) {
    if (
      words[i][0] !== words[i - 1][words[i - 1].length - 1] ||
      i > words.indexOf(words[i])
    ) {
      answer = [i % n || (i % n) + n, Math.ceil(i / n)];
      break;
    }
  }

  return answer;
}
