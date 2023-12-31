function solution(k, dungeons) {
  const answers = [];
  function permutation(arr, num) {
    const res = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const permutations = permutation(rest, num - 1);
      const attach = permutations.map((permutation) => [v, ...permutation]);
      res.push(...attach);
    });
    return res;
  }

  const result = permutation(dungeons, dungeons.length);

  result.forEach((v) => {
    let cnt = 0;
    let copyK = k;

    for (let i = 0; i < dungeons.length; i++) {
      if (v[i][0] <= copyK) {
        copyK -= v[i][1];
        cnt += 1;
      }
    }
    answers.push(cnt);
  });

  return Math.max(...answers);
}
