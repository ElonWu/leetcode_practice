// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = [],
    len = nums.length;

  for (let left = 0; left < len - 2; left++) {
    // 确保 left 不重复
    if (left > 0 && nums[left] === nums[left - 1]) continue;

    let right = len - 1;

    // 随着 mid 的更新， 逐步缩减 right
    for (let mid = left + 1; mid < len - 1; mid++) {
      // 确保 mid 不重复
      if (mid > left + 1 && nums[mid] === nums[mid - 1]) continue;

      let target = -(nums[left] + nums[mid]);

      // 当前 left 已经没有更多可能
      if (nums[mid + 1] > target) break;

      while (right > mid && nums[right] > target) {
        right--;
      }

      // 当前 mid 不再有可能出现
      if (right === mid) continue;

      if (nums[right] === target) {
        result.push([nums[left], nums[mid], nums[right]]);
      }
    }
  }

  return result;
};

const source = [-1, 0, 1, 2, -1, -4, 2];
const source1 = [-2, -2, -2, -1, -1, -1, 0, 0, 0, 1, 1, 2, 2, 2];
const source2 = [1, 1, 0, 0, 0, -1, -1];
const source3 = [1, 1, -2];
const source4 = [-2, 0, 1, 1, 2];
const source5 = [3, 0, -2, -1, 1, 2];

console.time();
console.log(threeSum(source1));
console.timeEnd();
