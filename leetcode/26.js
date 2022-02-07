/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   while (true) {
//     if (nums.length < 2) return nums.length;

//     const first = nums.shift(),
//       next = nums[0];

//     if (first === next) continue;

//     nums.push(first);

//     if (first > next) return nums.length;
//   }
// };

var removeDuplicates = function (nums) {
  const n = nums.length;

  if (n === 0) return n;

  let fast = 1,
    slow = 1;
  while (fast < n) {
    if (nums[fast] > nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }

    fast++;
  }

  return slow;
};

let nums = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 10];

const len = removeDuplicates(nums);

console.log(len, nums);
