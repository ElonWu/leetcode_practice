// 在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）
// 现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛。
// 返回必须翻转的 0 的最小数目。（可以保证答案至少是 1 。）

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const firstIsland = findIsland(grid);
};

const A1 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];
// 输出：1

const A2 = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 1],
];
// 输出：2

const A3 = [
  [0, 1],
  [1, 0],
];
// 输出：1

console.log(shortestBridge(A1));
console.log(shortestBridge(A2));
console.log(shortestBridge(A3));
