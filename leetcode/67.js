/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len = Math.max(a.length, b.length),
    offsetA = len - a.length,
    offsetB = len - b.length;

  let result = '',
    add = 0;

  for (let i = len - 1; i >= 0; i--) {
    const aI = i - offsetA,
      bI = i - offsetB,
      currA = aI < 0 ? '0' : a[aI],
      currB = bI < 0 ? '0' : b[bI],
      total = currA * 1 + currB * 1 + add;

    add = total >= 2 ? 1 : 0;
    result = (total % 2) + result;
  }

  return add ? '1' + result : result;
};

const a = '1010',
  b = '1011';

console.log(addBinary(a, b));
