function solution(survey, choices) {
  const map = new Map();
  let answer = "";

  for (let i = 0; i < survey.length; i++) {
    const [degree, agree] = survey[i].split("");
    const choice = choices[i];

    if (choice >= 4) {
      map.set(agree, (map.get(agree) || 0) + choice - 4);
    } else {
      map.set(degree, (map.get(degree) || 0) + 4 - choice);
    }
  }

  ["RT", "CF", "JM", "AN"].forEach((x) => {
    const [left, right] = x.split("");

    answer += (map.get(left) || 0) < (map.get(right) || 0) ? right : left;
  });

  return answer;
}
