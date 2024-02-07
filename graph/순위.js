function solution(n, results) {
  const map = new Map();

  for (const result of results) {
    if (!map.has(result[0]) || map.get(result[0]).output == null) {
      map.set(result[0], { ...map.get(result[0]), output: [result[1]] });
    } else {
      const output = map.get(result[0]).output;
      output.push(result[1]);

      map.set(result[0], { ...map.get(result[0]), output });
    }

    if (!map.has(result[1]) || map.get(result[1]).input == null) {
      map.set(result[1], { ...map.get(result[1]), input: [result[0]] });
    } else {
      const input = map.get(result[1]).input;
      input.push(result[0]);

      map.set(result[1], { ...map.get(result[1]), input });
    }
  }
  let answer = 0;
  map.forEach((x) => {
    if ((x.output?.length || 0) + (x.input?.length || 0) === n - 1) {
      answer += 1;
      console.log(x);
    } else {
      const arr = [];
      if (x.output?.length != null) {
        x.output.forEach((v) => {
          arr.push(...map.get(v)?.output);
        });
      }

      if (x.input?.length != null) {
        x.input.forEach((v) => {
          arr.push(...map.get(v)?.input);
        });
      }
      const set = new Set(arr);
      console.log(set);
    }
  });

  return answer;
}

const n = 5;
const results = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];
console.log(solution(n, results));
