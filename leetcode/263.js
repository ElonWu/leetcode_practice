// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 0) return false;

  while (true) {
    if (n % 10 === 0) {
      n /= 10;
      continue;
    }
    if (n % 5 === 0) {
      n /= 5;
      continue;
    }
    if (n % 3 === 0) {
      n /= 3;
      continue;
    }
    if (n % 2 === 0) {
      n /= 2;
      continue;
    }

    return n === 1;
  }
};

console.log(isUgly(6));
