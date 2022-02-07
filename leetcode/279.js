// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function (n) {
  // 迭代计算并缓存 1 ～ i 需要的计算量
  let cache = [0];

  for (let i = 1; i <= n; i++) {
    let min = Infinity;

    for (let j = 1; j * j <= i; j++) {
      // 当除去 j 的 完全平方时，剩余的最优解
      min = Math.min(min, cache[i - j * j]);
    }

    // 当前 i 的最优解
    cache[i] = min + 1;
  }
  return cache[n];
};

const n = 2000;
console.log(numSquares(13));
