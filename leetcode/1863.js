// 一个数组的 异或总和 定义为数组中所有元素按位 XOR 的结果；如果数组为 空 ，则异或总和为 0 。

// 例如，数组 [2,5,6] 的 异或总和 为 2 XOR 5 XOR 6 = 1 。
// 给你一个数组 nums ，请你求出 nums 中每个 子集 的 异或总和 ，计算并返回这些值相加之 和 。

// 注意：在本题中，元素 相同 的不同子集应 多次 计数。

// 数组 a 是数组 b 的一个 子集 的前提条件是：从 b 删除几个（也可能不删除）元素能够得到 a 。

// 解释：[5,1,6] 共有 8 个子集：
// - 空子集的异或总和是 0 。
// - [5] 的异或总和为 5 。
// - [1] 的异或总和为 1 。
// - [6] 的异或总和为 6 。
// - [5,1] 的异或总和为 5 XOR 1 = 4 。
// - [5,6] 的异或总和为 5 XOR 6 = 3 。
// - [1,6] 的异或总和为 1 XOR 6 = 7 。
// - [5,1,6] 的异或总和为 5 XOR 1 XOR 6 = 2 。
// 0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const subsets = getSubset(nums);

  return subsets.reduce((accu, curr) => accu + curr, 0);
};

// 全部子集的 异或总和
var getSubset = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i],
      after = nums.slice(i + 1);

    // 当前 异或总和
    result.push(curr);

    // 当前和往后的每种组合的 异或总和
    if (after.length > 0) {
      getSubset(after).forEach((com) => result.push(curr ^ com));
    }
  }
  return result;
};

console.log(subsetXORSum([5, 1, 6]));
