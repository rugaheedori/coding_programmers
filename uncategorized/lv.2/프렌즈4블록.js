function solution(m, n, board) {
  let answer = 0;
  const boards = board.map((x) => x.split(""));
  const deleteBlocks = new Set();

  const getBlocks = () => {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = boards[i][j];

        if (!current) continue;

        if (
          boards[i][j + 1] === current &&
          boards[i + 1][j] === current &&
          boards[i + 1][j + 1] === current
        ) {
          deleteBlocks.add(`${i},${j}`);
          deleteBlocks.add(`${i + 1},${j}`);
          deleteBlocks.add(`${i},${j + 1}`);
          deleteBlocks.add(`${i + 1},${j + 1}`);
        }
      }
    }
  };

  const pull = () => {
    const deleteBlockList = Array.from(new Set(deleteBlocks));

    while (deleteBlockList.length) {
      let [i, j] = deleteBlockList.shift().split(",");

      while (i > 0) {
        boards[i][j] = boards[i - 1][j];
        i -= 1;
      }

      boards[0][j] = null;
      answer += 1;
    }

    deleteBlocks.clear();
  };

  while (true) {
    getBlocks();

    if (deleteBlocks.size === 0) {
      return answer;
    }

    pull();
  }
}
