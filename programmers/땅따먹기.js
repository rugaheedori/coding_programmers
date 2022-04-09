function solution(lands) {
  let sum = 0;
  let location = 0;

  lands.forEach((land, idx) => {
    if (!idx) {
      sum += Math.max(...land);
      location = land.indexOf(Math.max(...land));
      return false;
    }
    let maxLand = Math.max(...land.filter((_, idx) => idx !== location));

    sum += maxLand;
    location = land.indexOf(maxLand);
  });
  return sum;
}
