/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (count) {
  let res = [1, 0];

  for (let i = count.length - 1; i >= 0; i--) {
    let base = res[0],
      sum = res[1] + count[i] * base;

    res = [sum, base];
  }

  return res;
};

// 输入：cont = [3, 2, 0, 2]
// 输出：[13, 4]
// 解释：原连分数等价于3 + (1 / (2 + (1 / (0 + 1 / 2))))。注意[26, 8], [-13, -4]都不是正确答案。

console.log(fraction([3, 2, 0, 2]));
