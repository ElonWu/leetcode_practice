/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] !== undefined && i - cache[nums[i]] <= k) return true;
    cache[nums[i]] = i;
  }

  return false;
};

const nums = [1, 2, 3, 1, 2, 3],
  k = 2;

console.log(containsNearbyDuplicate(nums, k));
