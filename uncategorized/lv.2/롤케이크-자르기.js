function solution(topping) {
  const toppingMap = new Map();
  const cakeTopping = new Set();
  let answer = 0;

  topping.forEach((x) => {
    toppingMap.set(x, (toppingMap.get(x) || 0) + 1);
  });

  toppingMap.set("kind", Array.from(toppingMap.keys()).length);

  while (topping.length) {
    const toppingKind = topping.pop();
    const toppingCnt = toppingMap.get(toppingKind);

    cakeTopping.add(toppingKind);
    toppingMap.set(toppingKind, toppingCnt - 1);

    if (toppingCnt === 1) {
      toppingMap.set("kind", toppingMap.get("kind") - 1);
    }

    if (toppingMap.get("kind") === cakeTopping.size) {
      answer += 1;
    } else if (answer > 0) {
      break;
    }
  }

  return answer;
}
