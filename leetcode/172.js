/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 0,
    twoCount = 0,
    fiveCount = 0;

  for (let i = 2; i <= n; i++) {
    let curr = i;

    while (curr) {
      if (curr % 10 === 0) {
        res++;
        curr /= 10;
        continue;
      }

      if (curr % 5 === 0) {
        fiveCount++;
        curr /= 5;
        continue;
      }

      if (curr % 2 === 0) {
        twoCount++;
        curr /= 2;
        continue;
      }

      break;
    }
  }

  res += Math.min(twoCount, fiveCount);

  return res;
};

console.log(trailingZeroes(Math.pow(10, 4)));
