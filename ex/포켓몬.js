function solution(nums) {
  const counts = {};

  nums.forEach((x) => {
    x in counts ? (counts[x] += 1) : (counts[x] = 1);
  });
  return Object.keys(counts).length < nums.length / 2
    ? Object.keys(counts).length
    : nums.length / 2;
}
