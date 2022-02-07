// 有一个密钥字符串 S ，只包含字母，数字以及 '-'（破折号）。其中， N 个 '-' 将字符串分成了 N+1 组。
// 给你一个数字 K，请你重新格式化字符串，使每个分组恰好包含 K 个字符。
// 特别地，第一个分组包含的字符个数必须小于等于 K，但至少要包含 1 个字符。两个分组之间需要用 '-'（破折号）隔开，并且将所有的小写字母转换为大写字母。
// 给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let result = '';

  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] === '-') continue;

    const len = result.length;

    if (len === k || (len % (k + 1) === k && len > k)) {
      result = '-' + result;
    }

    result = s[i].toUpperCase() + result;
  }

  return result;
};
const S = '5F3Z-2e-9-w',
  K = 4;

// const S = '2-5g-3-J',
//   K = 2;

console.log(licenseKeyFormatting(S, K));
