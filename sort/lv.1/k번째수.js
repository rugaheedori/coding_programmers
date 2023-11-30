function solution(array, commands) {
  const answer = [];

  commands.forEach(([x, y, z]) => {
    answer.push(array.slice(x - 1, y).sort((a, b) => a - b)[z - 1]);
  });

  return answer;
}
