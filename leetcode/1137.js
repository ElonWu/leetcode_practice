/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let cache = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    cache[i] = cache[i - 3] + cache[i - 2] + cache[i - 1];
  }

  return cache[n];
};

console.log(tribonacci(25));
