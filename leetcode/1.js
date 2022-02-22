/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] !== undefined) return [cache[nums[i]], i];
    cache[target - nums[i]] = i;
  }
};
