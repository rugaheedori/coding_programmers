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
