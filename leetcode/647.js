/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // 以 i 为中心的回文数
    // 以 i 和 i+1 为中心的回文数
    count += getCountFromCenter(s, i, i) + getCountFromCenter(s, i, i + 1);
  }

  return count;
};

const getCountFromCenter = (s, left, right) => {
  let count = 0;
  for (
    let offset = 0; // 确保 i 和 i+1 本身都有效且相同
    left - offset >= 0 && right + offset < s.length;
    offset++
  ) {
    if (s[left - offset] !== s[right + offset]) break;
    count++;
  }

  return count;
};

// const s = 'abc';
const s = 'aaa';

console.log(countSubstrings(s));
