// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn ）。

//

// 示例 1：

// 输入：x = 2.00000, n = 10
// 输出：1024.00000
// 示例 2：

// 输入：x = 2.10000, n = 3
// 输出：9.26100
// 示例 3：

// 输入：x = 2.00000, n = -2
// 输出：0.25000

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const res = calc(x, Math.abs(n));
  return n < 0 ? 1 / res : res;
};

const calc = (x, n) => {
  if (n === 0) return 1;
  const half = calc(x, Math.floor(n / 2));
  // 不断二分
  return n % 2 === 1 ? half * half * x : half * half;
};

console.log(myPow(2.0, -2147483648));
