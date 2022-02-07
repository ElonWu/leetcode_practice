/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === t) return true;

  let sI = 0,
    tI = 0;

  while (tI < t.length) {
    if (s[sI] === t[tI]) sI++;
    if (sI === s.length) return true;
    tI++;
  }

  return false;
};

const s = 'abc',
  t = 'ahbgdc';

console.log(isSubsequence(s, t));
