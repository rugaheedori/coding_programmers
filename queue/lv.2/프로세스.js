function solution(priorities, location) {
  const arr = Array.from({ length: priorities.length }).fill(0);
  let answer = 0;

  arr[location] = 1;

  while (priorities.length > 0) {
    const process = priorities.shift();

    if (process >= Math.max(...priorities)) {
      answer++;

      if (arr.shift()) {
        break;
      }
    } else {
      priorities.push(process);
      arr.push(arr.shift());
    }
  }

  return answer;
}
