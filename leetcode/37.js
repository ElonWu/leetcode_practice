// 解数独
const solveSudoku = function (board) {
  let cache = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') continue;

      const result = calcPosibility(board, i, j);

      if (!result?.length) {
        console.log('无解');
        return;
      }

      if (result.length === 1) {
        board[i][j] = result[0].toString();
        recheckPrev(board, i, j, cache);
      } else {
        cache[`${i},${j}`] = result;
      }
    }
  }

  console.log(cache, Object.keys(cache).length);
};

const calcPosibility = (board, i, j) => {
  const row = existRow(board, i);
  const col = existCol(board, j);
  const square = existSquare(board, i, j);

  let result = [];
  for (let i = 1; i <= 9; i++) {
    if (row.includes(i)) continue;
    if (col.includes(i)) continue;
    if (square.includes(i)) continue;

    result.push(i);
  }
  return result;
};

const existRow = (board, i) => {
  let result = [];
  for (let k = 0; k < 9; k++) {
    if (board[i][k] !== '.') result.push(parseInt(board[i][k]));
  }
  return result;
};

const existCol = (board, j) => {
  let result = [];
  for (let k = 0; k < 9; k++) {
    if (board[k][j] !== '.') result.push(parseInt(board[k][j]));
  }
  return result;
};

const existSquare = (board, i, j) => {
  const [x, y] = calcLocate(i, j);

  let result = [];

  for (let k = 0; k < 9; k++) {
    const [targetI, targetJ] = calcValue(x, y, k);

    if (board[targetI][targetJ] !== '.')
      result.push(parseInt(board[targetI][targetJ]));
  }
  return result;
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

const recheckPrev = (board, i, j, cache) => {
  recheckRow(board, i, j, cache);
  recheckCol(board, i, j, cache);
  recheckSquare(board, i, j, cache);
};

const recheckRow = (board, i, j, cache) => {
  for (let k = 0; k < 9; k++) {
    const key = `${i},${k}`;

    if (k !== j && cache[key]) {
      cache[key] = cache[key].filter((el) => el !== parseInt(board[i][j]));

      if (cache[key].length === 1) {
        board[i][k] = cache[key][0].toString();
        delete cache[key];
        recheckPrev(board, i, k, cache);
      }
    }
  }
};

const recheckCol = (board, i, j, cache) => {
  for (let k = 0; k < 9; k++) {
    const key = `${k},${j}`;

    if (k !== i && cache[key]) {
      cache[key] = cache[key].filter((el) => el !== parseInt(board[i][j]));

      if (cache[key].length === 1) {
        board[k][j] = cache[key][0].toString();
        delete cache[key];
        recheckPrev(board, k, j, cache);
      }
    }
  }
};

const recheckSquare = (board, i, j, cache) => {
  const [x, y] = calcLocate(i, j);

  for (let k = 0; k < 9; k++) {
    const [targetI, targetJ] = calcValue(x, y, k);

    const key = `${targetI},${targetJ}`;

    if (targetI !== i && targetJ !== j && cache[key]) {
      cache[key] = cache[key].filter((el) => el !== parseInt(board[i][j]));
      if (cache[key].length === 1) {
        board[targetI][targetJ] = cache[key][0].toString();
        delete cache[key];
        recheckPrev(board, targetI, targetJ, cache);
      }
    }
  }
};

let source = [
  ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
  ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
  ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
  ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
  ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
  ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
];

console.time();
solveSudoku(source);
console.timeEnd();

console.log(source);

const result = [
  ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
  ['7', '.', '.', '6', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
  ['.', '.', '7', '9', '8', '6', '2', '4', '1'],
  ['2', '6', '4', '3', '1', '7', '5', '9', '8'],
  ['1', '9', '8', '5', '2', '4', '3', '6', '7'],
  ['.', '.', '.', '8', '6', '3', '.', '2', '.'],
  ['.', '.', '.', '4', '9', '1', '.', '.', '6'],
  ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
];
