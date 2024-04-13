function solution(n, wires) {
  let answer = -1;

  for (let i = 0; i < wires.length; i++) {
    const network = new Map();

    wires.forEach(([x, y], idx) => {
      if (i !== idx) {
        network.set(x, network.get(x) ? [...network.get(x), y] : [y]);
        network.set(y, network.get(y) ? [...network.get(y), x] : [x]);
      }
    });

    const linked = new Set();
    const disconnected = wires[i];
    let visited = [disconnected[1]];

    while (visited.length) {
      const start = visited.shift();

      linked.add(start);

      if (network.get(start)) {
        network.get(start).forEach((x) => {
          if (!linked.has(x)) {
            visited.push(x);
          }
        });
      }
    }

    if (answer < 0 || answer > Math.abs(n - linked.size * 2)) {
      answer = Math.abs(n - linked.size * 2);
    }
  }

  return answer;
}
