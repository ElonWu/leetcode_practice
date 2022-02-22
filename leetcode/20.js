// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 > 0) return false;

  let stack = [];

  const paris = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of s) {
    // 左侧入栈
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    }
    // 右侧匹配则出栈，
    // 如果不匹配，则一定不合法: 如 (}
    else if ([')', ']', '}'].includes(char)) {
      if (stack.pop() !== paris[char]) return false;
    }
  }

  return stack.length === 0;
};

const list = ['((', '([)]', '{[]}', '()[]{}', '(]', '{(())}[()]'];

for (let str of list) {
  console.log(isValid(str));
}
