function solution(nums) {
  const map = new Map();
  let answer = 0;

  nums.forEach((x) => {
    if (map.get(x) == null) {
      map.set(x, map.get(x) + 1);
      answer += 1;
    }
  });

  return nums.length / 2 >= answer ? answer : nums.length / 2;
}

function solution(nums) {
  const set = new Set(nums);

  return nums.length / 2 >= set.size ? set.size : nums.length / 2;
}
