/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  // let result = new Array(nums.length * 2);

  // for (let i = 0; i < nums.length; i++) {
  //   result[i] = nums[i];
  //   result[i + nums.length] = nums[i];
  // }

  // return result;
  return nums.concat(nums);
};

const nums = [1, 2, 1];

console.log(buildArray(nums));
