/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;

  let sum = 0;

  for (let i = n - 1; i >= 0; i--) {
    let curr = 1;

    for (let j = 0; j <= i; j++) {
      let choices = 10 - j; // 第 j 位 有 choices 个选项
      if (i > 0 && j === 0) choices -= 1; // 二位数以上， 0 不能作为首位
      curr *= choices;
    }

    sum += curr;
  }

  return sum;
};

console.log(countNumbersWithUniqueDigits(0));
console.log(countNumbersWithUniqueDigits(1));
console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(3));
