/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [],
    prev = 0;

  for (let i = 0; i < nums.length; i++) {
    prev += nums[i];
    result.push(prev);
  }

  return result;
};

console.log(runningSum([1, 2, 3, 4]));
