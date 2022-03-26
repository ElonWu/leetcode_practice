// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 整数除法仅保留整数部分。

// 提示：
// 1 <= s.length <= 3 * 105
// s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
// s 表示一个 有效表达式
// 表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
// 题目数据保证答案是一个 32-bit 整数

/**
 * @param {sing} s
 * @return {number}
 */
var calculate = function (s) {
  let prev = 0,
    prevAction = '+',
    next = null;

  const sections = split(s);

  for (let i = 0; i <= sections.length; i++) {
    if (['+', '-', undefined].includes(sections[i])) {
      // 执行片段
      if (prevAction === '+') {
        prev += parseInt(next);
      } else {
        prev -= parseInt(next);
      }

      next = null;
      prevAction = sections[i];
    } else if (sections[i] === '*') {
      next *= sections[++i];
    } else if (sections[i] === '/') {
      next = Math.floor(next / sections[++i]);
    } else {
      next = sections[i];
    }
  }

  return prev;
};

// 分离
const split = (s) => {
  let stack = [],
    curr = '';

  // 将数字和符号分离
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;

    if (['+', '-', '*', '/'].includes(s[i])) {
      stack.push(curr);
      stack.push(s[i]);
      curr = '';
      continue;
    }

    curr += s[i];
  }
  stack.push(curr);

  return stack;
};

// 示例 1：
// 输入：s = "3+2*2"
// 输出：7

// 示例 2：
// 输入：s = " 3/2 "
// 输出：1

// 示例 3：
// 输入：s = " 3+5 / 2 "
// 输出：5

console.log(calculate(`3 + 5 * 5 / 2 - 6 * 7 + 9 + 2 * 2`));
