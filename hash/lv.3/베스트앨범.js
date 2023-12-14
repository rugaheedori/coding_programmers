function solution(genres, plays) {
  const sums = {};
  const numbers = {};
  const result = [];

  genres.forEach((x, idx) => {
    x in sums ? (sums[x] += plays[idx]) : (sums[x] = plays[idx]);
  });

  Object.keys(sums)
    .sort((a, b) => sums[b] - sums[a])
    .forEach((x) => {
      const nums = [];
      for (let i = 0; i < genres.length; i++) {
        if (x === genres[i]) nums.push([i, plays[i]]);
      }
      numbers[x] = nums.sort((a, b) => b[1] - a[1]).slice(0, 2);
      numbers[x].forEach((v) => {
        result.push(v[0]);
      });
    });

  return result
    .join()
    .split(",")
    .map((v) => +v);
}

function solution(genres, plays) {
  const answer = [];
  const genreMap = new Map();

  genres.forEach((x, idx) => {
    if (genreMap.get(x)) {
      let { total, best } = genreMap.get(x);

      if (plays[idx] > plays[best[0]]) {
        best = [idx, best[0]];
      } else if (plays[best[0]] >= plays[idx] && plays[idx] > plays[best[1]]) {
        best = [best[0], idx];
      } else {
        best.push(idx);

        if (best.length > 2) {
          best.pop();
        }
      }

      genreMap.set(x, { total: total + plays[idx], best });
    } else {
      genreMap.set(x, { total: plays[idx], best: [idx] });
    }
  });

  Array.from(genreMap)
    .sort((a, b) => b[1].total - a[1].total)
    .forEach((x) => {
      answer.push(...x[1].best);
    });

  return answer;
}
