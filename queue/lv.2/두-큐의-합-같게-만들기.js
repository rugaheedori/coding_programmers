function solution(queue1, queue2) {
  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);
  const avg = (sum1 + sum2) / 2;

  // 총 합이 홀수인 경우
  if (avg % 1) return -1;

  let answer = 0;
  let startIdx = 0;
  let endIdx = queue1.length - 1;

  const queue = sum1 > sum2 ? [...queue1, ...queue2] : [...queue2, ...queue1];
  let maxSum = sum1 > sum2 ? sum1 : sum2;

  while (answer < queue1.length * 3) {
    if (maxSum === avg) return answer;

    answer++;

    if (maxSum > avg) {
      maxSum -= queue[startIdx];
      startIdx = (startIdx + 1) % (queue1.length * 2);
    } else if (maxSum < avg) {
      endIdx = (endIdx + 1) % (queue1.length * 2);
      maxSum += queue[endIdx];
    }
  }

  return -1;
}

function solution(queue1, queue2) {
  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);
  const avg = (sum1 + sum2) / 2;

  let [idx1, idx2] = [0, 0];
  let answer = 0;
  let max = queue1.length * 3 - 1;

  while (!(avg % 1) && answer < max) {
    if (sum1 === avg) return answer;
    answer++;

    if (sum1 > avg) {
      queue2.push(queue1[idx1]);
      sum1 -= queue1[idx1];
      idx1 += 1;
    } else if (sum1 < avg) {
      queue1.push(queue2[idx2]);
      sum1 += queue2[idx2];
      idx2 += 1;
    }
  }

  return -1;
}
