/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const cache = [];

  for (let i = 0; i <= cost.length; i++) {
    cache[i] = (cost[i] || 0) + Math.min(cache[i - 1] || 0, cache[i - 2] || 0);
  }
  return cache[cost.length];
};

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(cost));
