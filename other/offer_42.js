// 给定一个整数数组，找出总和最大的连续数列，并返回总和。

// 输入： [-2,1,-3,4,-1,2,1,-5,4]
// 输出： 6
// 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let cache = [],
    max = -Infinity;

  // 缓存 i 位置目前的最大值
  for (let i = 0; i < nums.length; i++) {
    cache[i] = nums[i] + (cache[i - 1] > 0 ? cache[i - 1] : 0);
    max = Math.max(max, cache[i]);
  }

  return max;
};
