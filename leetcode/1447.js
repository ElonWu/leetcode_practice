// 给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。

//

// 示例 1：

// 输入：n = 2
// 输出：["1/2"]
// 解释："1/2" 是唯一一个分母小于等于 2 的最简分数。
// 示例 2：

// 输入：n = 3
// 输出：["1/2","1/3","2/3"]
// 示例 3：

// 输入：n = 4
// 输出：["1/2","1/3","1/4","2/3","3/4"]
// 解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let res = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (commonDivisor(i, j) === 1) {
        res.push(`${j}/${i}`);
      }
    }
  }
  return res;
};

const commonDivisor = (a, b) => {
  let prev = a,
    next = b;

  while (true) {
    let temp = prev % next;
    if (temp === 0) break;

    prev = next;
    next = temp;
  }

  return next;
};

// console.log(commonDivisor(6, 12));

console.log(simplifiedFractions(6));
