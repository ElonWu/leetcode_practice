// 给你一个 下标从 0 开始 的整数数组 nums ，其中 nums[i] 表示第 i 名学生的分数。另给你一个整数 k 。

// 从数组中选出任意 k 名学生的分数，使这 k 个分数间 最高分 和 最低分 的 差值 达到 最小化 。

// 返回可能的 最小差值 。

//

// 示例 1：

// 输入：nums = [90], k = 1
// 输出：0
// 解释：选出 1 名学生的分数，仅有 1 种方法：
// - [90] 最高分和最低分之间的差值是 90 - 90 = 0
// 可能的最小差值是 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);

  let min = Infinity;

  for (let i = 0; i < nums.length - k + 1; i++) {
    min = Math.min(min, nums[i + k - 1] - nums[i]);
  }
  return min;
};

console.log(
  minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6),
);
