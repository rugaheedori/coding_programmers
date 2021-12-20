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
  }
  return cnt;
}
