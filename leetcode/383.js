/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let i = 0,
    j = 0,
    cache = {};

  while (j < magazine.length) {
    if (i > ransomNote.length - 1) return true;

    // 匹配到 j
    if (ransomNote[i] === magazine[j]) {
      i++;
      j++;
      continue;
    }

    // j 存入缓存
    cache[magazine[j]] = (cache[magazine[j]] || 0) + 1;

    // 匹配缓存
    if (cache[ransomNote[i]]) {
      cache[ransomNote[i]] -= 1;
      // 匹配下一个
      i++;
    }

    // 比对下一个
    j++;
  }

  while (i < ransomNote.length) {
    // 消耗缓存
    if (cache[ransomNote[i]]) {
      cache[ransomNote[i]] -= 1;
      // 匹配下一个
      i++;

      continue;
    }

    return false;
  }

  return true;
};

// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
