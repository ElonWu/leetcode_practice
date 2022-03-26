/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const [rockR, rockC] = findWhiteRock(board);
  return searchFrom(board, rockR, rockC);
};

const searchFrom = (board, rockR, rockC) => {
  const rows = board.length,
    cols = board[0].length;

  let count = 0;
  // 左
  for (let c = rockC - 1; c >= 0; c--) {
    let curr = board[rockR][c];
    if (curr === 'B') break;
    if (curr === 'p') {
      count++;
      break;
    }
  }

  // 右
  for (let c = rockC + 1; c < cols; c++) {
    let curr = board[rockR][c];
    if (curr === 'B') break;
    if (curr === 'p') {
      count++;
      break;
    }
  }

  // 上
  for (let r = rockR - 1; r >= 0; r--) {
    let curr = board[r][rockC];
    if (curr === 'B') break;
    if (curr === 'p') {
      count++;
      break;
    }
  }

  // 下
  for (let r = rockR + 1; r < rows; r++) {
    let curr = board[r][rockC];
    if (curr === 'B') break;
    if (curr === 'p') {
      count++;
      break;
    }
  }
  return count;
};

const findWhiteRock = (board) => {
  const rows = board.length,
    cols = board[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 'R') return [r, c];
    }
  }
};

// const board = [
//   ['.', '.', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', 'p', '.', '.', '.', '.'],
//   ['.', '.', '.', 'R', '.', '.', '.', 'p'],
//   ['.', '.', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', 'p', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.'],
// ];
const board = [
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'B', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
];

console.log(numRookCaptures(board));
