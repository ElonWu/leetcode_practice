// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const cache = {};

var uniquePaths = function (m, n) {
  if (m === 1 || n === 1) return 1;

  const key = m <= n ? `${m},${n}` : `${n},${m}`;

  if (!cache[key]) {
    // 递归
    cache[key] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  }

  return cache[key];
};

// 输入：m = 3, n = 7
// 输出：28
// 示例 2：

// 输入：m = 3, n = 2
// 输出：3
// 解释：
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向下
// 示例 3：

// 输入：m = 7, n = 3
// 输出：28
// 示例 4：

// 输入：m = 3, n = 3
// 输出：6

const m = 51,
  n = 9;

// console.log(uniquePaths(3, 7));
// console.log(uniquePaths(7, 3));
console.log(uniquePaths(m, n));
