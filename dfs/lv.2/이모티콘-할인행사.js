function solution(users, emoticons) {
  let answer = [0, 0];
  const map = new Map([
    [40, new Set()],
    [30, new Set()],
    [20, new Set()],
    [10, new Set()],
  ]);

  for (let i = 0; i < users.length; i++) {
    const proportion = users[i][0];

    if (proportion <= 40) {
      map.get(40).add(i);
    }
    if (proportion <= 30) {
      map.get(30).add(i);
    }
    if (proportion <= 20) {
      map.get(20).add(i);
    }
    if (proportion <= 10) {
      map.get(10).add(i);
    }
  }

  function setValue(values, depth, sale) {
    return values.map((x, idx) => {
      return map.get(sale).has(idx)
        ? x + emoticons[depth + 1] * (1 - sale / 100)
        : x;
    });
  }

  function dfs(depth, values) {
    if (depth < emoticons.length - 1) {
      dfs(depth + 1, setValue(values, depth, 40));
      dfs(depth + 1, setValue(values, depth, 30));
      dfs(depth + 1, setValue(values, depth, 20));
      dfs(depth + 1, setValue(values, depth, 10));
    } else {
      let membership = 0;
      let cost = 0;

      values.forEach((x, idx) => {
        users[idx][1] > x ? (cost += x) : (membership += 1);
      });

      if (
        membership > answer[0] ||
        (membership === answer[0] && cost > answer[1])
      ) {
        answer = [membership, cost];
      }
    }
  }

  dfs(-1, Array.from({ length: users.length }).fill(0));
  return answer;
}
