const permutation = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
};

const isPrime = (num) => {
  if (num === 1 || num === 0) return false;
  if (num === 2) return true;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(numbers) {
  let answer = 0;
  const arr = numbers.split("");
  const set = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const result = permutation(arr, i).map((res) => +res.join(""));
    result.forEach((res) => {
      if (!set.has(res)) {
        set.add(res);
        answer += isPrime(res) ? 1 : 0;
      }
    });
  }

  return answer;
}
