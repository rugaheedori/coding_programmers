function solution(want, number, discount) {
  const map = new Map();
  let result = 0;

  function checking() {
    let check = true;

    for (let i = 0; i < want.length; i++) {
      if (map.get(want[i]) !== number[i]) {
        check = false;
        break;
      }
    }

    if (check) {
      result++;
    }
  }

  for (let i = 0; i < 10; i++) {
    map.set(discount[i], (map.get(discount[i]) || 0) + 1);
  }
  checking();

  for (let i = 10; i < discount.length; i++) {
    const outItem = discount[i - 10];
    const inItem = discount[i];

    map.set(outItem, map.get(outItem) - 1);
    map.set(inItem, (map.get(inItem) || 0) + 1);
    checking();
  }

  return result;
}
