// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

/**
 * @param {number} n
 * @return {number}
 */

const cache = [1, 1, 2];

var numTrees = function (n) {
  if (cache[n]) return cache[n];

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    // 以 i 为 root 时，左右两侧的全部组合数量
    sum += numTrees(i - 1) * numTrees(n - i);
  }

  cache[n] = sum;

  return sum;
};

console.log(numTrees(6));

// 示例 1：
// 输入：n = 3
// 输出：5

// 示例 2：
// 输入：n = 1
// 输出：1

// 提示：
// 1 <= n <= 19
