// 给你数字 k ，请你返回和为 k 的斐波那契数字的最少数目，其中，每个斐波那契数字都可以被使用多次。

// 斐波那契数字定义为：

// F1 = 1
// F2 = 1
// Fn = Fn-1 + Fn-2 ， 其中 n > 2 。
// 数据保证对于给定的 k ，一定能找到可行解。

/**
 * @param {number} k
 * @return {number}
 */

var findMinFibonacciNumbers = function (k) {
  let fib = [1, 1];

  while (fib[fib.length - 1] <= k) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  let res = 0;

  while (k > 0) {
    res++;

    for (let i = 1; i < fib.length; i++) {
      if (k < fib[i]) {
        // 每次加入当前最大的 fib, 否则会被拆分为多个 fib 只喝
        k -= fib[i - 1];
        break;
      }
    }
  }

  return res;
};

// 示例 1：

// 输入：k = 7
// 输出：2
// 解释：斐波那契数字为：1，1，2，3，5，8，13，……
// 对于 k = 7 ，我们可以得到 2 + 5 = 7 。
// 示例 2：

// 输入：k = 10
// 输出：2
// 解释：对于 k = 10 ，我们可以得到 2 + 8 = 10 。
// 示例 3：

// 输入：k = 19
// 输出：3
// 解释：对于 k = 19 ，我们可以得到 1 + 5 + 13 = 19

console.log(findMinFibonacciNumbers(19));
