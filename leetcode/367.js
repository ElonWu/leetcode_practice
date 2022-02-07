/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = -1,
    right = num + 1;

  while (true) {
    if (right - left <= 1) return false;

    let mid = Math.floor((left + right) / 2);

    if (mid * mid === num) return true;

    if (mid * mid > num) {
      right = mid;
    } else {
      left = mid;
    }
  }
};

console.log(isPerfectSquare(63));
