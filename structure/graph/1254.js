/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let res = 0;

  // 周边可访问的元素全部标记为 2
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (
        grid[r][c] === 0 &&
        (r === 0 ||
          r === grid.length - 1 ||
          c === 0 ||
          c === grid[0].length - 1)
      ) {
        spreadFrom(grid, r, c, 2);
      }
    }
  }

  // 剩余所有的岛屿均为封闭的
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 0) {
        res++;
        spreadFrom(grid, r, c, 3);
      }
    }
  }
  return res;
};

const spreadFrom = (grid, r, c, changeTo) => {
  grid[r][c] = changeTo;

  const dirs = [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1],
  ];

  for (let [r0, c0] of dirs) {
    if (grid[r0] && grid[r0][c0] === 0) spreadFrom(grid, r0, c0, changeTo);
  }
};

// 二维矩阵 grid 由 0 （土地）和 1 （水）组成。岛是由最大的4个方向连通的 0 组成的群，封闭岛是一个 完全 由1包围（左、上、右、下）的岛。
// 请返回 封闭岛屿 的数目。

// 示例 1：
// 输入：grid = [
// [1,1,1,1,1,1,1,0],
// [1,0,0,0,0,1,1,0],
// [1,0,1,0,1,1,1,0],
// [1,0,0,0,0,1,0,1],
// [1,1,1,1,1,1,1,0]
// ]
// 输出：2
// 解释：
// 灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。

// 示例 2：

// 输入：grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// 输出：1

// 示例 3：
// 输入：grid = [[1,1,1,1,1,1,1],
//              [1,0,0,0,0,0,1],
//              [1,0,1,1,1,0,1],
//              [1,0,1,0,1,0,1],
//              [1,0,1,1,1,0,1],
//              [1,0,0,0,0,0,1],
//              [1,1,1,1,1,1,1]]
// 输出：2

// 提示：
// 1 <= grid.length, grid[0].length <= 100
// 0 <= grid[i][j] <=1

const grid = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

[
  [1, 1, 1, 1, 1, 1, 1],
  [1, 3, 3, 3, 3, 3, 1],
  [1, 3, 1, 1, 1, 3, 1],
  [1, 3, 1, 3, 1, 3, 1],
  [1, 3, 1, 1, 1, 3, 1],
  [1, 3, 3, 3, 3, 3, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

console.log(closedIsland(grid));