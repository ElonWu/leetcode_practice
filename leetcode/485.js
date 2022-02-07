/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    prev = -1;

  for (let i = 0; i <= nums.length; i++) {
    if (!nums[i]) {
      max = Math.max(max, i - prev - 1);
      prev = i;
    }
  }

  return max;
};

// 输入：[1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

const nums = [1, 1, 0, 1, 1, 1];

console.log(findMaxConsecutiveOnes(nums));
