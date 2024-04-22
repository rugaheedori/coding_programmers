function solution(numbers) {
  const answer = Array.from({ length: numbers.length });
  let maxNum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    for (let j = i + 1; j <= numbers.length; j++) {
      if (numbers[i] > maxNum) {
        answer[i] = -1;
        maxNum = numbers[i];
        break;
      } else if (numbers[i] < numbers[j]) {
        answer[i] = numbers[j];
        break;
      } else if (numbers[i] === numbers[j]) {
        answer[i] = answer[j];
        break;
      }
    }
  }

  return answer;
}
