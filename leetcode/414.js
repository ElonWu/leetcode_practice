/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  if (nums.length <= 2) return Math.max(...nums);

  let result = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    console.log(curr);

    for (let j = 0; j < 3; j++) {
      if (curr <= result[j]) {
        if (j > 0) result[j - 1] = curr;
        break;
      }
      if (j === 2) result[2] = curr;
    }
  }

  console.log(result);

  return result[0];
};
const nums = [4, 8, 7, 3, 2, 3, 2];

console.log(thirdMax(nums));
