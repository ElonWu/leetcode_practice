// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。

// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let cache = [0, 1], // 已出现的丑数， 0是占位
    // 未乘以 2/3/5 丑数的位置 pointer
    pointer2 = 1,
    pointer3 = 1,
    pointer5 = 1;

  for (let i = 2; i <= n; i++) {
    // 下一个丑数， 必定是某个更小的丑数乘以 2、3、5 的结果之一
    const num2 = cache[pointer2] * 2,
      num3 = cache[pointer3] * 3,
      num5 = cache[pointer5] * 5;

    const min = Math.min(num2, num3, num5);

    cache.push(min);

    // 一旦某个pointer下乘以 2/3/5 的值出现过，更新 pointer 到下一个最小丑数
    if (min === num2) {
      pointer2++;
    }
    if (min === num3) {
      pointer3++;
    }
    if (min === num5) {
      pointer5++;
    }
  }

  return cache[n];
};

// console.log(nthUglyNumber(1));
// console.log(nthUglyNumber(10));
// console.log(nthUglyNumber(11));
console.log(nthUglyNumber(1000));

// 示例 1：

// 输入：n = 10
// 输出：12
// 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
// 示例 2：

// 输入：n = 1
// 输出：1
// 解释：1 通常被视为丑数。
