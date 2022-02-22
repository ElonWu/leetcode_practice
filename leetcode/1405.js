/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */

var longestDiverseString = function (a, b, c) {
  const res = [],
    store = [
      [a, 'a'],
      [b, 'b'],
      [c, 'c'],
    ];

  while (true) {
    store.sort((a, b) => b[0] - a[0]);

    let hasNext = false;

    for (let i = 0; i < store.length; i++) {
      if (
        store[i][0] > 0 &&
        !(
          store[i][1] === res[res.length - 2] &&
          store[i][1] === res[res.length - 1]
        )
      ) {
        store[i][0]--;
        res.push(store[i][1]);
        hasNext = true;
        break;
      }
    }

    if (!hasNext) break;
  }

  return res.join('');
};

// 输入：a = 1, b = 1, c = 7
// 输出："ccaccbcc"
// 解释："ccbccacc" 也是一种正确答案。
// 示例 2：

// 输入：a = 2, b = 2, c = 1
// 输出："aabbc"
// 示例 3：

// 输入：a = 7, b = 1, c = 0
// 输出："aabaa"
// 解释：这是该测试用例的唯一正确答案。

// const a = 1,
//   b = 1,
//   c = 7;

// const a = 2,
//   b = 2,
//   c = 1;

// const a = 7,
//   b = 1,
//   c = 0;

// const a = 100,
//   b = 100,
//   c = 100;

console.log(longestDiverseString(a, b, c));
