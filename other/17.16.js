/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  let cache = [],
    max = 0;

  for (let i = 0; i < nums.length; i++) {
    let maxx = 0;

    for (let j = i - 2; j >= 0; j--) {
      maxx = Math.max(maxx, cache[j]);
    }

    cache[i] = nums[i] + maxx;

    max = Math.max(max, cache[i]);
  }

  return max;
};
