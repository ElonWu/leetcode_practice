// 解数独
const solveSudoku = function (board) {
  let candidates = {};

  // 全部设定candidates
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') {
        candidates[`${r}-${c}`] = new Set([
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
        ]);
      }
    }
  }

  // 除去不可能的candidates
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== '.') narrowDown(r, c, board, candidates);
    }
  }

  const keys = Object.keys(candidates);
  // 递归 + 回溯尝试剩余的candidates
  tryCandidates(board, candidates, keys, 0);
  return board;
};

// r c 位置被确认， 把所有冲突的 candidate 剔除
const narrowDown = function (r, c, board, candidates) {
  const occupied = board[r][c];
  const confilictPos = findConflictPos(r, c);

  for (let [r0, c0] of confilictPos) {
    // 当前位置的 candidates
    const currPosCandidates = candidates[`${r0}-${c0}`];
    if (!currPosCandidates) continue;

    // 过滤掉所有冲突的candidate
    currPosCandidates.delete(occupied);

    // 如果是单个 candidate，则把这个 candidate 放到 board 中
    if (currPosCandidates.size === 1) {
      board[r0][c0] = [...currPosCandidates][0];
      // 删除这个 candidate
      delete candidates[`${r0}-${c0}`];

      // 连锁反应
      narrowDown(r0, c0, board, candidates);
    }
  }
};

const findConflictPos = (() => {
  const cache = {};
  return (r, c) => {
    if (cache[`${r}-${c}`]) return cache[`${r}-${c}`];
    const keys = [];

    // 同一行
    for (let i = 0; i < 9; i++) {
      if (i === c) continue;
      keys.push([r, i]);
    }

    // 同一列
    for (let i = 0; i < 9; i++) {
      if (i === r) continue;
      keys.push([i, c]);
    }

    // 同一个九宫格
    const [r0, c0] = [Math.floor(r / 3) * 3, Math.floor(c / 3) * 3];

    for (let i = r0; i < r0 + 3; i++) {
      for (let j = c0; j < c0 + 3; j++) {
        if (i === r && j === c) continue;
        keys.push([i, j]);
      }
    }

    cache[`${r}-${c}`] = keys;
    return keys;
  };
})();

const tryCandidates = (board, candidates, keys, i) => {
  if (i === keys.length) return true;

  const key = keys[i];
  const [r, c] = key.split('-');
  const candidate = [...candidates[key]];

  for (let j = 0; j < candidate.length; j++) {
    // 验证当前位置是否可以放这个数字
    const verified = verify(board, r, c, candidate[j]);
    if (!verified) continue;

    // 尝试占据
    board[r][c] = candidate[j];
    // 验证剩余冲突
    if (tryCandidates(board, candidates, keys, i + 1)) return true;
    // 剩余不通过则回溯
    board[r][c] = '.';
  }

  return false;
};

const verify = (board, r, c, num) => {
  const confilictPos = findConflictPos(r, c);
  for (let [r0, c0] of confilictPos) {
    if (board[r0][c0] === num) return false;
  }

  return true;
};

let source1 = [
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
console.log(solveSudoku(source1));
console.timeEnd();

// const result = [
//   ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
//   ['7', '.', '.', '6', '.', '2', '.', '.', '.'],
//   ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
//   ['.', '.', '7', '9', '8', '6', '2', '4', '1'],
//   ['2', '6', '4', '3', '1', '7', '5', '9', '8'],
//   ['1', '9', '8', '5', '2', '4', '3', '6', '7'],
//   ['.', '.', '.', '8', '6', '3', '.', '2', '.'],
//   ['.', '.', '.', '4', '9', '1', '.', '.', '6'],
//   ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
// ];

// const source2 = [
//   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];

// console.time();
// console.log(solveSudoku(source1));
// console.timeEnd();
