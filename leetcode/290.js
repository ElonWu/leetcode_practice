// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let cache1 = {},
    pI = 1,
    cache2 = {},
    sI = 1;

  const arr = s.split(' ');

  if (pattern.length !== arr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!cache1[pattern[i]]) cache1[pattern[i]] = pI++;
    if (!cache2[arr[i]]) cache2[arr[i]] = sI++;

    if (cache1[pattern[i]] !== cache2[arr[i]]) return false;
  }

  return true;
};

const simplify = (arr) => {
  let cache = {},
    i = 1;

  return arr
    .map((el) => {
      if (!cache[el]) cache[el] = i++;
      return cache[el];
    })
    .join(',');
};

// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true

// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false

// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false

// 输入: pattern = "abba", str = "dog dog dog dog"
// 输出: false

const pattern = 'abba',
  str = 'dog cat cat dog';

console.log(wordPattern(pattern, str));
