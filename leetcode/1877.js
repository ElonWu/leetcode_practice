// 一个数对 (a,b) 的 数对和 等于 a + b 。最大数对和 是一个数对数组中最大的 数对和 。

// 比方说，如果我们有数对 (1,5) ，(2,3) 和 (4,4)，最大数对和 为 max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8 。
// 给你一个长度为 偶数 n 的数组 nums ，请你将 nums 中的元素分成 n / 2 个数对，使得：

// nums 中每个元素 恰好 在 一个 数对中，且
// 最大数对和 的值 最小 。
// 请你在最优数对划分的方案下，返回最小的 最大数对和 。

// 输入：nums = [3,5,2,3]
// 输出：7
// 解释：数组中的元素可以分为数对 (3,3) 和 (5,2) 。
// 最大数对和为 max(3+3, 5+2) = max(6, 7) = 7 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = -Infinity;

  for (let i = 0; i < nums.length / 2; i++) {
    result = Math.max(result, nums[i] + nums[nums.length - 1 - i]);
  }

  return result;
};

const nums = [3, 5, 2, 3];

console.log(minPairSum(nums));
