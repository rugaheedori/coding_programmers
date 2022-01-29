function solution(id_list, reports, k) {
  const badMans = {};
  const reporters = [];

  reports.forEach((report) => {
    const poeple = report.split(' ');

    if (!badMans[poeple[1]]) badMans[poeple[1]] = [];

    if (!badMans[poeple[1]].includes(poeple[0])) {
      badMans[poeple[1]].push(poeple[0]);
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
