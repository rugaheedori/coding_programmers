function solution(tickets) {
  const answer = [];

  tickets.sort();

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === "ICN") {
      dfs(tickets[i][1], new Set([i]), ["ICN", tickets[i][1]]);
    }
  }

  function dfs(current, visited, route) {
    if (visited.size === tickets.length) {
      answer.push(route);
      return;
    }

    for (let j = 0; j < tickets.length; j++) {
      const [from, to] = tickets[j];

      if (from === current && !visited.has(j)) {
        dfs(to, new Set([...visited, j]), [...route, to]);
      }
    }
  }

  return answer[0];
}
