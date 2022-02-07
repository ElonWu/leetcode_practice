/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y, // 异或之后不同位为1
    result = 0;

  while (xor !== 0) {
    // 不断右移， 并判断最后一位是否为1(即不同的位)
    result += xor & 1;
    xor >>= 1;
  }

  return result;
};
