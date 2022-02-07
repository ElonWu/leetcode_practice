/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  const rows = board.length,
    cols = board[0]?.length;

  let result = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const target = board[r][c];

      if (
        target === 'X' &&
        (r === 0 || board[r - 1][c] !== 'X') &&
        (c === 0 || board[r][c - 1] !== 'X')
      ) {
        result++;
      }
    }
  }

  return result;
};

const board = [
  ['X', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
];

console.log(countBattleships(board));
