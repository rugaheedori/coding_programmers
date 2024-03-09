function solution(cacheSize, cities) {
  const cache = [];
  let answer = 0;

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((x) => {
    const idx = cache.indexOf(x.toUpperCase());

    if (idx !== -1) {
      answer += 1;
      cache.splice(idx, 1);
    } else {
      answer += 5;
      if (cache.length >= cacheSize) {
        cache.shift();
      }
    }
    cache.push(x.toUpperCase());
  });

  return answer;
}
