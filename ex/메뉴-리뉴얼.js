function solution(orders, course) {
  const counts = {};
  orders
    .flatMap((x) => x.split(''))
    .forEach((order) => {
      counts[order] = counts[order] ? counts[order] + 1 : 1;
    });
  return counts;
}
