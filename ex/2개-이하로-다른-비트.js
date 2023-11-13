function solution(numbers) {
  const answer = [];

  numbers.forEach((number) => {
    const binaryNum = number.toString(2).split('');

    if (binaryNum[binaryNum.length - 1] === '0') {
      answer.push(number + 1);
      return;
    }

    binaryNum.unshift('0');
    let zeroIdx = binaryNum.lastIndexOf('0');

    binaryNum[zeroIdx] = '1';
    binaryNum[zeroIdx + 1] = '0';

    answer.push(parseInt(binaryNum.join(''), 2));
  });

  return answer;
}
