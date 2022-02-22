// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let res = -1,
    cache = [];

  for (let i = 0; i < s.length; i++) {
    if (cache.includes(s[i])) continue;

    let j = i + 1;

    for (; j < s.length; j++) {
      if (s[i] === s[j]) {
        cache.push(s[i]);
        break;
      }
    }

    if (j === s.length) return i;
  }

  return res;
};

// 示例 1：

// 输入: s = "leetcode"
// 输出: 0
// 示例 2:

// 输入: s = "loveleetcode"
// 输出: 2
// 示例 3:

// 输入: s = "aabb"
// 输出: -1

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
