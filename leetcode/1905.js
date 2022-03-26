/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let count = 0;

  // 找到 grid2 中岛的任意一个起点
  for (let r = 0; r < grid2.length; r++) {
    for (let c = 0; c < grid2[0].length; c++) {
      if (grid2[r][c] === 1 && exploreFrom(grid1, grid2, r, c)) count++;
    }
  }
  return count;
};

// 标记和验证
const exploreFrom = (grid1, grid2, r, c) => {
  let isSub = grid1[r][c] === 1;

  // 标记为已访问
  grid2[r][c] = 2;

  // 访问四周
  const siblings = [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1],
  ];

  for (let [r0, c0] of siblings) {
    if (grid2[r0]?.[c0] === 1) {
      const nextIsSub = exploreFrom(grid1, grid2, r0, c0);
      isSub = isSub && nextIsSub;
    }
  }

  return isSub;
};

// 给你两个 m x n 的二进制矩阵 grid1 和 grid2 ，它们只包含 0 （表示水域）和 1 （表示陆地）。
// 一个 岛屿 是由 四个方向 （水平或者竖直）上相邻的 1 组成的区域。任何矩阵以外的区域都视为水域。
// 如果 grid2 的一个岛屿，被 grid1 的一个岛屿 完全 包含，也就是说 grid2 中该岛屿的每一个格子都被 grid1 中同一个岛屿完全包含，
// 那么我们称 grid2 中的这个岛屿为 子岛屿 。
// 请你返回 grid2 中 子岛屿 的 数目 。

// 示例 1：
// 输入：grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// 输出：3
// 解释：如上图所示，左边为 grid1 ，右边为 grid2 。
// grid2 中标红的 1 区域是子岛屿，总共有 3 个子岛屿。

// 示例 2：
// 输入：grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
// 输出：2
// 解释：如上图所示，左边为 grid1 ，右边为 grid2 。
// grid2 中标红的 1 区域是子岛屿，总共有 2 个子岛屿。

// 提示：
// m == grid1.length == grid2.length
// n == grid1[i].length == grid2[i].length
// 1 <= m, n <= 500
// grid1[i][j] 和 grid2[i][j] 都要么是 0 要么是 1 。

const grid1 = [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
  ],
  grid2 = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
  ];

console.log(countSubIslands(grid1, grid2));
