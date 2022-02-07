/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  let cache = [0, 1];

  if (n <= 1) return cache[n];

  let max = 1;

  for (let i = 2; i <= n; i++) {
    cache[i] =
      i % 2 === 1 ? cache[(i - 1) / 2] + cache[(i - 1) / 2 + 1] : cache[i / 2];

    max = Math.max(max, cache[i]);
  }

  return max;
};

console.log(getMaximumGenerated(4));
