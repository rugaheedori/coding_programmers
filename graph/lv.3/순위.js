// 플로이드 워셜
function solution(n, results) {
  const arr = Array.from(Array(n), () => Array(n).fill(false));

  results.forEach(([i, j]) => {
    arr[i - 1][j - 1] = true;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // i win j == i win k & k win j
        arr[i][j] = arr[i][j] || (arr[i][k] && arr[k][j]);
      }
    }
  }

  let answer = n;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }

      // 서로의 우열을 가릴 수 없는 경우
      if (!arr[i][j] && !arr[j][i]) {
        answer--;
        break;
      }
    }
  }

  return answer;
}

function solution(n, results) {
  let answer = 0;
  const map = new Map();

  results.forEach(([k, v]) => {
    if (map.get(k)?.win) {
      map.set(k, { ...map.get(k), win: new Set([...map.get(k)?.win, v]) });
    } else {
      map.set(k, { ...map.get(k), win: new Set([v]) });
    }

    if (map.get(v)?.lose) {
      map.set(v, { ...map.get(v), lose: new Set([...map.get(v)?.lose, k]) });
    } else {
      map.set(v, { ...map.get(v), lose: new Set([k]) });
    }
  });

  for (let i = 0; i < n; i++) {
    let cnt = 0;

    if (map.get(i + 1)?.lose) {
      const queue = [...map.get(i + 1).lose];
      const visited = new Set([i + 1, ...map.get(i + 1).lose]);

      while (queue.length) {
        const t = queue.shift();

        if (map.get(t)?.lose) {
          for (let tt of map.get(t).lose) {
            if (!visited.has(tt)) {
              queue.push(tt);
              visited.add(tt);
            }
          }
        }
      }

      cnt += visited.size - 1;
    }

    if (map.get(i + 1)?.win) {
      const queue = [...map.get(i + 1).win];
      const visited = new Set([i + 1, ...map.get(i + 1).win]);

      while (queue.length) {
        const t = queue.shift();

        if (map.get(t)?.win) {
          for (let tt of map.get(t).win) {
            if (!visited.has(tt)) {
              queue.push(tt);
              visited.add(tt);
            }
          }
        }
      }

      cnt += visited.size - 1;
    }

    if (cnt === n - 1) {
      answer += 1;
    }
  }

  return answer;
}
