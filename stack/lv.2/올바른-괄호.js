function solution(s) {
  const bracket = [];

  for (const char of s) {
    if (bracket.length > 0 && bracket[bracket.length - 1] + char === "()") {
      bracket.pop();
    } else {
      bracket.push(char);
    }
  }

  return bracket.length === 0;
}
