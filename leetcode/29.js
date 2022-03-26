// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const sameSide =
    (dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0);

  let res = 0;

  while (Math.abs(dividend) >= Math.abs(divisor)) {
    dividend = sameSide ? dividend - divisor : dividend + divisor;
    res = sameSide ? res + 1 : res - 1;
  }

  return res;
};

// 示例 1:

// 输入: dividend = 10, divisor = 3
// 输出: 3
// 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
// 示例 2:

// 输入: dividend = 7, divisor = -3
// 输出: -2
// 解释: 7/-3 = truncate(-2.33333..) = -2

console.log(divide(7, -3));
