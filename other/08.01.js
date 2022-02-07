// 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  const cache = [1, 1, 2];

  if (n < 3) return cache[n];

  for (let i = 3; i <= n; i++) {
    cache[i] = (cache[i - 1] + cache[i - 2] + cache[i - 3]) % 1000000007;
  }

  return cache[n];
};
