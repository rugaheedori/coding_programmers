// 이중 반복문 사용
function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    answer[i] = 0;

    for (let j = i + 1; j < prices.length; j++) {
      answer[i] += 1;
      if (price > prices[j]) {
        break;
      }
    }
  }

  return answer;
}

// stack 알고리즘 사용
function solution(prices) {
  const answer = [];
  const stack = [];

  prices.forEach((x, idx) => {
    if (idx > 0) {
      while (stack.length > 0) {
        let top = stack.pop();

        if (prices[top] <= x) {
          stack.push(top);
          break;
        } else {
          answer[top] = idx - top;
        }
      }
    }

    stack.push(idx);
    answer[idx] = prices.length - 1 - idx;
  });

  return answer;
}
