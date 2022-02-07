// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length < 2) return false;

  let pattern = s.slice(0, 1),
    i = 1;

  while (true) {
    console.log(pattern, i, i % pattern.length);

    const matchPattten = s[i] === s[i % pattern.length];

    // 全部满足 pattern
    if (matchPattten) {
      if (i++ === s.length - 1) return true;
      continue;
    }

    // 不满足时， 更新 pattern
    let nextPatternLen = pattern.length + 1;

    // 逐渐 +1 直到可整除
    while (s.length % nextPatternLen !== 0) {
      if (++nextPatternLen > s.length / 2) return false; // 已不可能出现重复
    }

    pattern = s.slice(0, nextPatternLen);
    // 从pattern 后第一个值开始验证
    i = nextPatternLen;
  }
};

const s = 'ab';

console.log(repeatedSubstringPattern(s));
