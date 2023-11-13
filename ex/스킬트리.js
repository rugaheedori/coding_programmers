function solution(skill, skill_trees) {
  const skills = skill.split('');
  let cnt = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const result = [];

    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skills.includes(skill_trees[i][j])) {
        result.push(skills.indexOf(skill_trees[i][j]));
      }
    }

    let cnt2 = 0;

    result.forEach((el, idx) => {
      if (el === idx) cnt2 += 1;
    });

    if (cnt2 === result.length || result.length === 0) cnt += 1;
  }
  return cnt;
}
