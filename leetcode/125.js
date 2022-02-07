/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const n = s.length;

  let prev = 0,
    next = n - 1;

  while (prev < next) {
    // prev 的有效位置
    while (!isValidChar(s, prev)) {
      if (++prev === n - 1) break;
    }

    // next 的有效位置
    while (!isValidChar(s, next)) {
      if (--next === 0) break;
    }

    if (prev >= next) return true;

    if (!isEqual(s, prev++, next--)) return false;
  }

  return true;
};

const isValidChar = (s, i) => {
  const code = s.charCodeAt(i);

  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
};

const isEqual = (s, prev, next) => {
  let prevChar = s.charAt(prev),
    nextChar = s.charAt(next);

  console.log(prev, prevChar);
  console.log(next, nextChar);
  console.log('-----------------------');

  return prevChar.toLowerCase() === nextChar.toLowerCase();
};

const str = 'A man, a plan, a canal: Panama';
// const str = '0P';
console.log(isPalindrome(str));
