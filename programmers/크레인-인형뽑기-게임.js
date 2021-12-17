function solution(board, moves) {
  const stacking = [];
  let result = 0;

  moves.forEach((v) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][v - 1]) {
        if (stacking[stacking.length - 1] !== board[i][v - 1]) {
          stacking.push(board[i][v - 1]);
        } else {
          stacking.pop();
          result += 2;
        }
        board[i][v - 1] = 0;
        break;
      }
    }
  });

  return result;
}
