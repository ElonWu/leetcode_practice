/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let i = 0,
    str = '';

  // 再叠加下去，产生的 b 长度的子串都是重复的
  while (a.length * i - b.length <= a.length * 2) {
    if (str.indexOf(b) >= 0) return i;

    str += a;
    i++;
  }

  return -1;
};

// const a = 'abcd',
//   b = 'cdabcdab';

const a = 'abc',
  b = 'wxt';

console.log(repeatedStringMatch(a, b));
