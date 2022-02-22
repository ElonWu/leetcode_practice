// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

// 请你找出并返回只出现一次的那个数。

// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let single = true;

  for (let i = 1; i <= nums.length; i++) {
    // 前一个 与当前相同
    if (nums[i] === nums[i - 1]) {
      single = false;
      continue;
    }

    // 前一个与当前不同,  且是 single
    if (single) return nums[i - 1];

    // 新的 single
    single = true;
  }
};

// 示例 1:
// 输入: nums = [1,1,2,3,3,4,4,8,8]
// 输出: 2

// 示例 2:
// 输入: nums =  [3,3,7,7,10,11,11]
// 输出: 10

const nums = [2, 1, 1];

console.log(singleNonDuplicate(nums));
