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

function solution(topping) {
  const toppingSet = new Set();
  const toppingMap = new Map();

  let answer = 0;
  let check = 0;

  for (let i = 0; i < topping.length; i++) {
    if (toppingMap.get(topping[i])) {
      toppingMap.set(topping[i], toppingMap.get(topping[i]) + 1);
    } else {
      toppingMap.set(topping[i], 1);
      check++;
    }
  }

  for (let i = 0; i < topping.length; i++) {
    toppingSet.add(topping[i]);
    toppingMap.set(topping[i], toppingMap.get(topping[i]) - 1);

    if (!toppingMap.get(topping[i])) check--;
    if (toppingSet.size === check) answer++;
  }

  return answer;
}
