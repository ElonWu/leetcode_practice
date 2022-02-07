/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1;

  while (n >= i) {
    n -= i++;
  }

  return i - 1;
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
