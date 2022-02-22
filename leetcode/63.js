// 一个机器人位于一个 m x n 的 grids 的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

// 网格中的障碍物和空位置分别用 1 和 0 来表示。

/**
 * @param {number[][]} grids
 * @return {number}
 */

const cache = {};

var uniquePathsWithObstacles = function (grids) {
  const result = uniquePaths(0, 0, grids);
  cache = {};
  return result;
};

var uniquePaths = function (row, col, grids) {
  // 超出范围
  if (row >= grids.length || col >= grids[0].length) {
    return 0;
  }
  // 到达终点
  if (row === grids.length - 1 && col === grids[0].length - 1) {
    return grids[row][col] === 1 ? 0 : 1;
  }

  const key = `${row},${col}`;

  // 到达新的位置
  if (cache[key] === undefined) {
    // 计算此位置的结果
    cache[key] =
      grids[row][col] === 1
        ? 0 // 当前位置是障碍物，此路不通
        : uniquePaths(row + 1, col, grids) + uniquePaths(row, col + 1, grids); // 递归
  }
  // 返回已知位置的结果
  return cache[key];
};

// 输入：obstacleGrid = [[0,1],[0,0]]
// 输出：1

// 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：2

// console.log(
//   uniquePathsWithObstacles([
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0],
//   ]),
// );
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ]),
);

console.log(cache);
