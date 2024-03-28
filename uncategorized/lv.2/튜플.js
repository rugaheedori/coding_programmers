function solution(s) {
  const splitNums = s.slice(2, -2).split("},{");

  splitNums.sort((a, b) => a.length - b.length);

  let set = new Set();

  splitNums.forEach((x) => {
    set = new Set([...set, ...x.split(",")]);
  });

  return Array.from(set).map((x) => +x);
}
