// 输入：nums = [1,2,3]
// 输出：3
// 解释：
// 只需要3次操作（注意每次操作会增加两个元素的值）：
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4];

/**
 * @param {number[]} nums
 * @return {number}
 */

// n-1 个元素增加1，等同于一个元素减少1，所有值的趋向最小值
var minMoves = function (nums) {
  let sum = 0,
    min = Infinity;

  for (let num of nums) {
    sum += num;
    min = Math.min(min, num);
  }

  return min === Infinity ? 0 : sum - min * nums.length;
};

const nums = [83, 86, 77, 15, 93, 35, 86, 92, 49, 21];

console.log(minMoves(nums));
