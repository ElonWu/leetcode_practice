// 你现在手里有一份大小为 n x n 的 网格 grid，上面的每个 单元格 都用 0 和 1 标记好了。
// 其中 0 代表海洋，1 代表陆地。

// 请你找出一个海洋单元格，这个海洋单元格到离它最近的陆地单元格的距离是最大的，并返回该距离。
// 如果网格上只有陆地或者海洋，请返回 -1。

// 我们这里说的距离是「曼哈顿距离」（ Manhattan Distance）：
// (x0, y0) 和 (x1, y1) 这两个单元格之间的距离是 |x0 - x1| + |y0 - y1| 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;

  // 落脚点
  let stops = [],
    max = -1;

  // 以所有岛屿为初始落脚点
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        stops.push([r, c]);
      }
    }
  }

  // 从落脚点不断寻找未标记的海洋，并更新最大距离
  while (stops.length) {
    // 取出一个位置
    const [r, c] = stops.shift();

    const next = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ];

    for (let [r0, c0] of next) {
      // 上一个落脚点的距离，即此处海洋距离岛屿的距离
      if (grid[r0]?.[c0] === 0) {
        // 更新最远距离
        const curr = grid[r][c];
        max = Math.max(max, curr);

        grid[r0][c0] = curr + 1;
        // 新的落脚点
        stops.push([r0, c0]);
      }
    }
  }
  return max;
};
const grid1 = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];

const grid2 = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

console.log(maxDistance(grid1));
console.log(maxDistance(grid2));
