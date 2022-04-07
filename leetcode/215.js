// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let cache = [];

  for (let num of nums) {
    console.log(cache, num);

    let i = 0;
    for (; i < cache.length; i++) {
      // 插入
      if (num >= cache[i]) {
        cache.splice(i, 0, num);
        break;
      }
    }

    // 比全部数字都小
    if (i === cache.length) cache.push(num);
  }

  return cache[k - 1];
};

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
//

// 提示：

// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104

const nums = [3, 2, 1, 5, 6, 4],
  k = 2;

// const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
//   k = 4;

console.log(findKthLargest(nums, k));
