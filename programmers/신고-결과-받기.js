function solution(id_list, reports, k) {
  const badMans = {};
  const reporters = [];

  reports.forEach((report) => {
    const people = report.split(' ');

    if (!badMans[people[1]]) badMans[people[1]] = [];

    if (!badMans[people[1]].includes(people[0])) {
      badMans[people[1]].push(people[0]);
    }
  });

  Object.values(badMans).forEach((reporter) => {
    if (reporter.length >= k) reporters.push(...reporter);
  });

  for (let i = 0; i < id_list.length; i++) {
    id_list[i] = reporters.filter((v) => v === id_list[i]).length;
  }

  return id_list;
}
