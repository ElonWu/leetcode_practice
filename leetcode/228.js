/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const n = nums.length;

  let result = [];

  let start = 0,
    end = 0;

  while (end < n) {
    if (nums[end] !== nums[end + 1] - 1) {
      result.push(
        start === end ? nums[start].toString() : `${nums[start]}->${nums[end]}`,
      );
      start = end + 1;
    }

    end++;
  }

  return result;
};

const nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));

// 输出：["0->2","4->5","7"]
