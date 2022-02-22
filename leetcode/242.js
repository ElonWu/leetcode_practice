// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

//

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let diff = {};

  for (let i = 0; i < s.length; i++) {
    let ss = s[i],
      ts = t[i];
    diff[ss] = (diff[ss] || 0) + 1;
    diff[ts] = (diff[ts] || 0) - 1;
  }

  for (let val of Object.values(diff)) {
    if (val !== 0) return false;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
