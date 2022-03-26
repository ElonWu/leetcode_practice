// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const row = board.length,
    col = board[0].length,
    next = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

  let siblingMap = {},
    triggers = [],
    triggered = [];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (board[r][c] === 'X') continue;

      // O 是否在边界上
      if (r === 0 || r === row - 1 || c === 0 || c === col - 1) {
        triggers.push(`${r}-${c}`);
      }

      // 记录相邻 O 关系
      let xCount = 0;

      for (let [offR, offC] of next) {
        // 超出边界
        if (r + offR < 0 || r + offR >= row || c + offC < 0 || c + offC >= col)
          continue;

        // 不是 O
        if (board[r + offR][c + offC] === 'X') {
          if (++xCount === 4) board[r][c] = 'X';
          continue;
        }

        const keyPrev = `${r}-${c}`,
          keyNext = `${r + offR}-${c + offC}`;

        siblingMap[keyPrev] = (siblingMap[keyPrev] || []).concat(keyNext);
      }
    }
  }

  console.log({
    triggers,
    siblingMap,
  });

  while (triggers.length) {
    let newTriggers = [];

    for (let trigger of triggers) {
      // 已触发
      if (triggered.includes(trigger)) continue;

      // 标记为已触发
      triggered.push(trigger);

      // 连锁反应
      for (let sibling of siblingMap?.[trigger] || []) {
        if (newTriggers.includes(sibling)) continue;
        newTriggers.push(sibling);
      }

      delete siblingMap[trigger];
    }

    triggers = newTriggers;
  }

  console.log({
    triggers,
    siblingMap,
  });

  for (let key of Object.keys(siblingMap)) {
    const [r, c] = key.split('-');

    board[r][c] = 'X';
  }

  console.log(board);
};

// 示例 1：
// 输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。
// 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

// 示例 2：
// 输入：board = [["X"]]
// 输出：[["X"]]

// console.log(
//   solve([
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'X', 'X'],
//   ]),
// );
console.log(
  solve([
    ['X', 'X', 'X'],
    ['X', 'O', 'X'],
    ['X', 'X', 'X'],
  ]),
);
