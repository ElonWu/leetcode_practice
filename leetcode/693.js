/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  if (n === 1) return true;

  let curr = n % 2 === 1 ? (n - 1) / 2 : n; // 转为偶数

  while (true) {
    if (curr === 2) return true;
    if (curr < 2) return false;

    curr /= 2; // 转奇数
    curr = (curr - 1) / 2; // 转偶数
  }
};

// 奇数
// 2^0 + 2^2 + 2^4 ... 2^(2x)

// 偶数
// 2^1 + 2^3 + 2^5 ... 2^(2x + 1)

// 根据以上推断规律
// 101010 => 10101    x / 2
// 10101 => 101    (x - 1) / 2

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
console.log(hasAlternatingBits(21));
console.log(hasAlternatingBits(42));
// console.log(hasAlternatingBits(Math.pow(2, 31) - 1));
