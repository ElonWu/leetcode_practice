/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  let cache = [false, false, true, false];

  for (let i = 1; i <= n; i++) {
    let canWin = false;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0 && cache[i - j] === false) {
        canWin = true;
        break;
      }
    }
    cache[i] = canWin;
  }
  return cache[n];
};

console.log(divisorGame(6));
