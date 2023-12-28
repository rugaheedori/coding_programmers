function solution(n, costs) {
  const relation = {};
  let answer = 0;

  const findParents = (v) => {
    if (relation[v] === undefined) {
      relation[v] = v;
    }

    while (relation[v] != v) {
      v = relation[v];
    }

    return v;
  };

  costs
    .sort((a, b) => a[2] - b[2])
    .forEach((x) => {
      const node1 = findParents(x[0]);
      const node2 = findParents(x[1]);

      if (node1 !== node2) {
        relation[node2] = node1;
        answer += x[2];
      }
    });

  return answer;
}
