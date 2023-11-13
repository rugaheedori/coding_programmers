function solution(name) {
  const indexNotA = [];
  const minCnt = [];

  let sum = name.split('').reduce((a, b, idx) => {
    const num = b.charCodeAt() - 65;

    if (b !== 'A') indexNotA.push(idx);

    return (a += num > 13 ? 26 - num : num);
  }, 0);

  if (indexNotA.length === 1) {
    return sum + Math.min(indexNotA[0], name.length - indexNotA[0]);
  }

  indexNotA.forEach((order, idx) => {
    if (idx < indexNotA.length - 1) {
      minCnt.push(order + (name.length - indexNotA[idx + 1]) * 2);
      minCnt.push(order * 2 + (name.length - indexNotA[idx + 1]));
    } else {
      minCnt.push(order);
    }
  });

  return sum + Math.min(...minCnt);
}
