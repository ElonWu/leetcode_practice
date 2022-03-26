// 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。

// 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。

// 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count += exploreFrom(i, j, grid);
      }
    }
  }
  return count;
};

const exploreFrom = (r, c, grid) => {
  let canTouchEdge =
    r === 0 || r === grid.length - 1 || c === 0 || c === grid[0].length - 1;

  // 将访问过的陆地标记为2
  let count = 1;
  grid[r][c] = 2;

  // 访问四周
  const siblings = [
    [r - 1, c],
    [r + 1, c],
    [r, c - 1],
    [r, c + 1],
  ];

  for (let [r0, c0] of siblings) {
    if (grid[r0]?.[c0] === 1) {
      let nextCount = exploreFrom(r0, c0, grid);

      // 当前就能触及边界
      if (canTouchEdge) continue;

      // 下一步能触及边界
      if (nextCount === 0) {
        canTouchEdge = true;
        continue;
      }

      // 任一步无法触及边界， 累计格子数量
      count += nextCount;
    }
  }

  // 一旦能触及到边界，则独立单元格数量为0
  // 否则为全部累积可访问的格子数量
  return canTouchEdge ? 0 : count;
};

// const grid = [
//   [0, 1, 1, 0],
//   [0, 0, 1, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 0],
// ];

const grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

console.log(numEnclaves(grid));
