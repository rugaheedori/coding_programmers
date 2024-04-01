function solution(str1, str2) {
  const reg = new RegExp(/[a-zA-Z]/);
  const str1List = [];
  const str2List = [];

  for (let i = 0; i < str1.length - 1; i++) {
    if (reg.test(str1[i]) && reg.test(str1[i + 1])) {
      str1List.push(`${str1[i]}${str1[i + 1]}`);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (reg.test(str2[i]) && reg.test(str2[i + 1])) {
      str2List.push(`${str2[i]}${str2[i + 1]}`);
    }
  }

  const visitedIdx = new Set();
  let intersection = 0;

  str1List.forEach((x) => {
    for (let i = 0; i < str2List.length; i++) {
      if (x.toUpperCase() === str2List[i].toUpperCase() && !visitedIdx.has(i)) {
        visitedIdx.add(i);
        intersection += 1;
        break;
      }
    }
  });

  const union = str1List.length + str2List.length - intersection;

  return Math.floor(65536 * (union ? intersection / union : 1));
}
