function solution(want, number, discount) {
  const map = new Map();
  let result = 0;

  function checking() {
    for (let i = 0; i < want.length; i++) {
      if (map.get(want[i]) !== number[i]) {
        return;
      }
    }
    result++;
  }

  for (let i = 0; i < discount.length; i++) {
    if (i >= 10) {
      const outItem = discount[i - 10];

      map.set(outItem, map.get(outItem) - 1);
    }

    const inItem = discount[i];

    map.set(inItem, (map.get(inItem) || 0) + 1);
    checking();
  }

  return result;
}
