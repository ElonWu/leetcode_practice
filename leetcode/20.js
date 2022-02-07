/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let cache1 = 0,
    cache2 = 0,
    cache3 = 0;

  for (let char of s) {
    switch (char) {
      case '(':
        cache1 += 1;
        break;

      case '[':
        cache2 += 1;
        break;

      case '{':
        cache3 += 1;
        break;

      case ')':
        cache1 -= 1;
        break;

      case ']':
        cache2 -= 1;
        break;

      case '}':
        cache3 -= 1;
        break;
    }

    if (cache1 < 0 || cache2 < 0 || cache3 < 0) return false;
  }

  return cache1 + cache2 + cache3 === 0;
};

const str = '([)]';
// const str = '{[]}';

console.log(isValid(str));
