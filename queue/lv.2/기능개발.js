function solution(progresses, speeds) {
  const answer = [1];
  let term = Math.ceil((100 - progresses.shift()) / speeds.shift());

  while (progresses.length > 0) {
    let nextTerm = Math.ceil((100 - progresses.shift()) / speeds.shift());

    if (term >= nextTerm) {
      answer.push(answer.pop() + 1);
    } else {
      answer.push(1);
      term = nextTerm;
    }
  }

  return answer;
}
