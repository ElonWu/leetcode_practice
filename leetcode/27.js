/**
 * @param {number[]} nums
 * @return {number}
 */
var removeElement = function (nums, val) {
  const n = nums.length;
  let fast = 0,
    slow = 0;

  while (fast < n) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }

    fast++;
  }

  return slow;
};

let nums = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 10];

const len = removeElement(nums, 5);

console.log(len, nums);
