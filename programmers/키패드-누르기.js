function solution(numbers, hand) {
  const lefts = [1, 4, 7];
  const rights = [3, 6, 9];
  let leftHand = [3, 0];
  let rightHand = [3, 2];
  const result = [];

  numbers.forEach((n) => {
    if (lefts.includes(n)) {
      leftHand = [parseInt(n / 3), 0];
      result.push('L');
    } else if (rights.includes(n)) {
      rightHand = [parseInt(n / 3) - 1, 2];
      result.push('R');
    } else {
      if (
        Math.abs(leftHand[0] + leftHand[1] - parseInt(n / 3) - 1) >
        Math.abs(rightHand[0] + rightHand[1] - parseInt(n / 3) - 1)
      ) {
        result.push('L');
      } else if (
        Math.abs(leftHand[0] + leftHand[1] - parseInt(n / 3) - 1) <
        Math.abs(rightHand[0] + rightHand[1] - parseInt(n / 3) - 1)
      ) {
        result.push('R');
      } else {
        result.push(hand.splice(1).toUpperCase());
        if (hand.splice(1).toUpperCase() === 'L') {
          rightHand = [parseInt(n / 3), 1];
        } else {
          leftHand = [parseInt(n / 3), 1];
        }
      }
    }
  });
  return result.join('');
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

console.log(solution(numbers, hand));
