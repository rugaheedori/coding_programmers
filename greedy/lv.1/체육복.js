function solution(n, lost, reserve) {
  const lostMen = lost
    .filter((x) => reserve.indexOf(x) === -1)
    .sort((a, b) => a - b);
  const reserveMen = reserve
    .filter((x) => lost.indexOf(x) === -1)
    .sort((a, b) => a - b);
  const preReserved = [];

  for (const lostMan of lostMen) {
    if (
      reserveMen.indexOf(lostMan - 1) !== -1 &&
      preReserved.indexOf(lostMan - 1) === -1
    ) {
      preReserved.push(lostMan - 1);
    } else if (
      reserveMen.indexOf(lostMan + 1) !== -1 &&
      preReserved.indexOf(lostMan + 1) === -1
    ) {
      preReserved.push(lostMan + 1);
    } else {
      n -= 1;
    }
  }

  return n;
}