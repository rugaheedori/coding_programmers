function solution(n, lost, reserve) {
  const reserver = reserve.filter((st) => !lost.includes(st));
  const loster = lost.filter((st) => !reserve.includes(st));

  loster
    .sort((a, b) => a - b)
    .forEach((st) => {
      if (reserver.includes(st - 1)) {
        reserver.splice(reserver.indexOf(st - 1), 1);
      } else if (reserver.includes(st + 1)) {
        reserver.splice(reserver.indexOf(st + 1), 1);
      } else {
        n -= 1;
      }
    });

  return n;
}
