// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 广度优先搜索
// var exist = function (board, word) {
//   let prev = null;

//   for (let char of word) {
//     prev =
//       prev === null ? searchStart(board, char) : searchNext(board, char, prev);

//     // console.log(char, prev);
//     if (!prev?.length) return false;
//   }
//   return true;
// };

// const searchStart = (board, char) => {
//   let list = [];

//   // 全部查询
//   for (let r = 0; r < board.length; r++) {
//     for (let c = 0; c < board[0].length; c++) {
//       if (board[r][c] === char) {
//         // 记录匹配项
//         const key = `${r}-${c}`;
//         list.push({ pos: [r, c], visited: { [key]: true } });
//       }
//     }
//   }

//   return list;
// };

// const searchNext = (board, char, prev) => {
//   let list = [];

//   for (let {
//     pos: [row, col],
//     visited,
//   } of prev) {
//     // 下一步
//     const next = [
//       [row - 1, col],
//       [row + 1, col],
//       [row, col - 1],
//       [row, col + 1],
//     ];

//     for (let [r, c] of next) {
//       // 出界
//       if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) continue;

//       const key = `${r}-${c}`;

//       // 已经访问过
//       if (visited[key]) continue;

//       // 匹配
//       if (board[r][c] === char) {
//         // 记录匹配项
//         const visitedUpdate = Object.assign({ [key]: true }, visited);
//         list.push({ pos: [r, c], visited: visitedUpdate });
//       }
//     }
//   }

//   return list;
// };

// 深度优先搜索
var exist = function (board, word) {
  const visited = {};

  // 深度优先搜索
  const dfs = (board, row, col, index) => {
    if (board[row][col] !== word.charAt(index)) return false; // 当前不匹配
    if (index === word.length - 1) return true; // 全部匹配完成

    // 标记当前位置已访问
    const key = `${row}-${col}`;
    visited[key] = true;

    // 探索下一位置
    for (let [r, c] of [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ]) {
      // 超出边界
      if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) continue;
      // 重复访问
      if (visited[`${r}-${c}`]) continue;

      // 深度遍历成功
      if (dfs(board, r, c, index + 1)) return true;
    }

    // 全部探索失败后，修改标记当前位置为未访问
    visited[key] = false;
    return false;
  };

  // 以 i.j 为起始点是否能匹配
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // 任一匹配
      if (dfs(board, i, j, 0)) return true;
    }
  }

  return false;
};

// 示例 1：
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

// 示例 2：
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// 输出：true

// 示例 3：
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// 输出：false

// var exist = function (board, word) {
//   const h = board.length,
//     w = board[0].length;
//   const directions = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0],
//   ];
//   const visited = new Array(h);
//   for (let i = 0; i < visited.length; ++i) {
//     visited[i] = new Array(w).fill(false);
//   }
//   const check = (i, j, s, k) => {
//     if (board[i][j] != s.charAt(k)) {
//       return false;
//     } else if (k == s.length - 1) {
//       return true;
//     }
//     visited[i][j] = true;
//     let result = false;
//     for (const [dx, dy] of directions) {
//       let newi = i + dx,
//         newj = j + dy;
//       if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
//         if (!visited[newi][newj]) {
//           const flag = check(newi, newj, s, k + 1);
//           if (flag) {
//             result = true;
//             break;
//           }
//         }
//       }
//     }
//     visited[i][j] = false;
//     return result;
//   };

//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//       const flag = check(i, j, word, 0);
//       if (flag) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(
//   exist(
//     [
//       ['A', 'B', 'C', 'E'],
//       ['S', 'F', 'E', 'S'],
//       ['A', 'D', 'E', 'E'],
//     ],
//     'ABCESEEEFS',
//   ),
// );
// console.log(
//   exist(
//     [
//       ['A', 'B', 'C', 'E'],
//       ['S', 'F', 'C', 'S'],
//       ['A', 'D', 'E', 'E'],
//     ],
//     'ABCCS',
//   ),
// );
// console.log(exist([['a', 'b']], 'aba'));
// console.log(exist([['a', 'a']], 'aa'));
console.log(
  exist(
    [
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
    ],
    'AAAAAAAAAAAAAAB',
  ),
);
