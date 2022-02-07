/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let curr = n,
    cache = { [n]: true };

  while (curr !== 1) {
    curr = calc(curr);

    console.log(cache);

    // 是否无效循环
    if (cache[curr]) return false;

    cache[curr] = true;
  }

  return true;
};

const calc = (num) => {
  return num
    .toString()
    .split('')
    .reduce((accu, curr) => accu + Math.pow(curr, 2), 0);
};

console.log(isHappy(2));
