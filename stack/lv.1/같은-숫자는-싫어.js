// stack 알고리즘 사용
function solution(arr) {
  const answer = [];

  arr.forEach((x, idx) => {
    if (idx > 0) {
      const top = answer.pop();

      top != x ? answer.push(top, x) : answer.push(top);
    } else {
      answer.push(x);
    }
  });

  return answer;
}

function solution(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}