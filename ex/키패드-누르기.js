function solution(numbers, hand) {
  let left = [3, 0];
  let right = [3, 2];
  const result = [];

  numbers.forEach((n) => {
    if (n % 3 === 1) {
      result.push('L');
      left = [parseInt(n / 3), 0];
    } else if (n % 3 === 2 || n === 0) {
      const leftNum = Math.abs(left[0] + left[1] - (parseInt(n / 3) + 2));
      const rightNum = Math.abs(right[0] + right[1] - (parseInt(n / 3) + 2));

      if (leftNum > rightNum) {
        result.push('L');
        left = [parseInt(n / 3), 1];
      } else if (leftNum < rightNum) {
        result.push('R');
        right = [parseInt(n / 3), 1];
      } else {
        if (hand.charAt(0) === 'L') {
          result.push('L');
          left = [parseInt(n / 3), 1];
        }
        result.push('R');
        right = [parseInt(n / 3), 1];
      }
    } else {
      result.push('R');
      right = [parseInt(n / 3) - 1, 2];
    }
  });
  return result.join('');
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

console.log(solution(numbers, hand));
