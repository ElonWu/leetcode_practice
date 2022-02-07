// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let result = null,
    closestDiff = null,
    len = nums.length;

  for (let left = 0; left < len - 2; left++) {
    // 确保 left 不重复
    if (left > 0 && nums[left] === nums[left - 1]) continue;

    // 随着 mid 的更新， 逐步缩减 right
    for (let mid = left + 1; mid < len - 1; mid++) {
      // 确保 mid 不重复
      if (mid > left + 1 && nums[mid] === nums[mid - 1]) continue;

      let right = len - 1;

      // 当前组合中最小差距
      let currMinDiff = null,
        currMinDiffSum = null;

      while (right > mid) {
        const sum = nums[left] + nums[mid] + nums[right],
          diff = Math.abs(sum - target);

        if (diff === 0) return sum;

        // diff 递减中，不断更新最小
        if (currMinDiff === null || diff <= currMinDiff) {
          currMinDiff = diff;
          currMinDiffSum = sum;
          right--;
          continue;
        }
        // 停止递减了
        break;
      }

      // 当前最小是否时全局最小
      if (!closestDiff || currMinDiff < closestDiff) {
        closestDiff = currMinDiff;
        result = currMinDiffSum;
      }
    }
  }

  return result;
};

// const nums = [-4, -1, 1, 2],
//   target = 1;

const nums = [-3, 0, 1, 2],
  target = 1;

console.log(threeSumClosest(nums, target));
