/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  let bases = [],
    res = '';

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const base = num1.length - i - 1 + (num2.length - j - 1);
      bases[base] = (bases[base] || 0) + num1[i] * num2[j];
    }
  }

  // 大数相加
  let extra = 0;

  for (let i = 0; i < bases.length; i++) {
    const sum = bases[i] + extra,
      curr = sum % 10;

    extra = (sum - curr) / 10;
    res = curr + res;
  }

  return extra ? extra + res : res;
};

console.log(multiply('123456789', '987654321'));
