/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s === t) return true;

  const cache1 = {},
    cache2 = {};

  for (let i = 0; i < s.length; i++) {
    // 记录映射关系
    if (!cache1[s[i]]) cache1[s[i]] = t[i];
    // 验证映射关系
    else if (cache1[s[i]] !== t[i]) return false;

    // 记录映射关系
    if (!cache2[t[i]]) cache2[t[i]] = s[i];
    // 验证映射关系
    else if (cache2[t[i]] !== s[i]) return false;
  }

  return true;
};

const s = 'badc',
  t = 'baba';

console.log(isIsomorphic(s, t));
