function solution(people, limit) {
  let answer = 0;
  let maxIdx = people.length - 1;
  let minIdx = 0;

  people.sort((a, b) => b - a);

  while (maxIdx > minIdx) {
    if (maxIdx !== minIdx && people[minIdx] + people[maxIdx] <= limit) {
      maxIdx -= 1;
    }
    minIdx += 1;
    answer += 1;

    if (maxIdx === minIdx) {
      answer += 1;
      break;
    }
  }

  return answer;
}
