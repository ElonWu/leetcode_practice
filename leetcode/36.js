/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = 9,
    cols = 9;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === '.') continue;
      // 验证是否行重复
      if (!isValidRow(board, i, j)) return false;
      // 验证是否列重复
      if (!isValidCol(board, i, j)) return false;
      // 验证是否9宫格重复
      if (!isValidSquare(board, i, j)) return false;
    }
  }

  return true;
};

const isValidRow = (board, i, j) => {
  for (let k = j + 1; k < 9; k++) {
    if (board[i][j] === board[i][k]) {
      console.log([
        [i, j],
        [j, k],
      ]);
      return false;
    }
  }
  return true;
};

const isValidCol = (board, i, j) => {
  for (let k = i + 1; k < 9; k++) {
    if (board[i][j] === board[k][j]) {
      console.log([
        [i, j],
        [k, j],
      ]);
      return false;
    }
  }
  return true;
};

const isValidSquare = (board, i, j) => {
  const [x, y, t] = calcLocate(i, j);

  for (let k = t + 1; k < 9; k++) {
    const [compareI, compareJ] = calcValue(x, y, k);
    if (board[i][j] === board[compareI][compareJ]) {
      console.log([
        { i, j },
        { i: compareI, j: compareJ },
      ]);

      return false;
    }
  }

  return true;
};

const calcLocate = (i, j) => {
  const x = Math.floor(i / 3);
  const y = Math.floor(j / 3);

  const t = 3 * i - 9 * x + j - 3 * y;

  return [x, y, t];
};

const calcValue = (x, y, k) => {
  const i = 3 * x + Math.floor(k / 3);
  const j = 3 * y + (k % 3);

  return [i, j];
};

const board = [
  ['.', '.', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '8', '.', '.', '.', '3', '.'],
  ['.', '5', '.', '.', '2', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '4', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '7'],
  ['.', '1', '.', '.', '.', '.', '.', '.', '.'],
  ['2', '4', '.', '.', '.', '.', '9', '.', '.'],
];

console.log(isValidSudoku(board));
