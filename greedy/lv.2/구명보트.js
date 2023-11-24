function solution(people, limit) {
  people.sort((a, b) => a - b);

  let answer = 0;
  let minIndex = 0;
  let maxIndex = people.length - 1;

  while (minIndex <= maxIndex) {
    if (people[minIndex] + people[maxIndex] <= limit) {
      minIndex += 1;
    }

    answer += 1;
    maxIndex -= 1;
  }

  return answer;
}