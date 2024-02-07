function solution(number, k) {
  const answer = [number[0]];
  const maxLen = number.length - k;

  for (let i = 1; i < number.length; i++) {
    if (!k) {
      answer.push(number.slice(i));
      break;
    }

    while (k > 0 && answer[answer.length - 1] < number[i]) {
      answer.pop();
      k -= 1;
    }

    answer.push(number[i]);
  }

  //* ex) 98765432 -> 9876으로 지우는 작업
  return answer.join("").slice(0, maxLen);
}
