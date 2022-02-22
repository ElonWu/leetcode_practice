// 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。

// 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。

// 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let visited = [], // 可访问的陆地
    count = 0; // 全部陆地数量

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) continue;

      count++;

      // 未访问过的边界
      const isEdge =
        i === 0 || i === grid.length - 1 || j === 0 || j === grid[0].length - 1;
      if (isEdge && !visited.includes(`${i},${j}`)) {
        exploreFromEdge(i, j, grid, visited);
      }
    }
  }

  return count - visited.length;
};

const exploreFromEdge = (i, j, grid, visited) => {
  visited.push(`${i},${j}`);

  // 访问四周
  const siblings = [
    [i - 1, j],
    [i + 1, j],
    [i, j - 1],
    [i, j + 1],
  ];

  for (let [row, col] of siblings) {
    // 无效点
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      continue;
    if (grid[row][col] === 0) continue;

    // 已访问
    if (visited.includes(`${row},${col}`)) continue;

    // 未访问
    exploreFromEdge(row, col, grid, visited);
  }
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
