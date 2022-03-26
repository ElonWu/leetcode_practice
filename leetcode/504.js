// 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

/**
 * @param {number} num
 * @return {string}
 */

const convertToBase = function (base) {
  return (num) => {
    if (num === 0) return 0;

    let res = '', // 最终返回
      isPositive = num > 0, // 正负
      rest = Math.abs(num), // 剩余
      exponential = Math.floor(Math.log(rest) / Math.log(base)); // 最高指数级

    while (exponential >= 0) {
      let currPos = 0,
        used = 0;

      if (rest > 0) {
        currPos = Math.floor(Math.abs(rest) / Math.pow(base, exponential));
        used = currPos * Math.pow(base, exponential);
      }

      res += currPos; // 累积位数
      rest -= used; // 较少剩余
      exponential--; // 较少指数级
    }

    return (isPositive ? '' : '-') + res;
  };
};
var convertToBase7 = convertToBase(7);

var convertToBase10 = convertToBase(10);

// 示例 1:
// 输入: num = 100
// 输出: "202"

// 示例 2:
// 输入: num = -7
// 输出: "-10"

console.log(convertToBase7(100));
console.log(convertToBase7(-7));

// console.log(convertToBase10(100));
// console.log(convertToBase10(-100));
