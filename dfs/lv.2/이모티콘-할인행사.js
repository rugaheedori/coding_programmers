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

  function dfs(idx, values) {
    if (idx < emoticons.length - 1) {
      dfs(
        idx + 1,
        values.map((x, index) => {
          if (map.get(40).has(index)) {
            return x + emoticons[idx + 1] * 0.6;
          }
          return x;
        })
      );
      dfs(
        idx + 1,
        values.map((x, index) => {
          if (map.get(30).has(index)) {
            return x + emoticons[idx + 1] * 0.7;
          }
          return x;
        })
      );

      dfs(
        idx + 1,
        values.map((x, index) => {
          if (map.get(20).has(index)) {
            return x + emoticons[idx + 1] * 0.8;
          }
          return x;
        })
      );

      dfs(
        idx + 1,
        values.map((x, index) => {
          if (map.get(10).has(index)) {
            return x + emoticons[idx + 1] * 0.9;
          }
          return x;
        })
      );
    } else {
      let membership = 0;
      let cost = 0;

      values.forEach((x, idx) => {
        if (users[idx][1] > x) {
          cost += x;
        } else {
          membership += 1;
        }
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
