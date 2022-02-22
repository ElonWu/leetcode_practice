// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0,
    index = 0;

  while (index < s.length) {
    let stack = 0,
      count = 0;

    for (; index < s.length; index++) {
      // 左侧
      if (s[index] === '(') {
        stack++;
        continue;
      }

      // 无法匹配的右侧
      if (stack === 0) break;

      console.log(index);

      stack--;
      count += 2;
    }

    index++;
    max = Math.max(max, count);
  }

  return max;
};

// 示例 1：

// 输入：s = "(()"
// 输出：2
// 解释：最长有效括号子串是 "()"
// 示例 2：

// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"
// 示例 3：

// 输入：s = ""
// 输出：0

// const s = ')()())';

// const s = '(()';

// const s = '';

const s = '()(()';

console.log(longestValidParentheses(s));
