function solution(clothes) {
  let answer = 1;
  const map = new Map();

  clothes.forEach(([_, kind]) => {
    if (map.get(kind)) {
      map.set(kind, map.get(kind) + 1);
    } else {
      map.set(kind, 1);
    }
  });

  map.forEach((x) => {
    answer *= x + 1;
  });

  return answer - 1;
}

function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((x, [_, kind]) => {
        x[kind] = x[kind] ? x[kind] + 1 : 1;
        return x;
      }, {})
    ).reduce((x, y) => {
      return x * (y + 1);
    }, 1) - 1
  );
}
