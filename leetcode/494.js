/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  return genFunc()(nums, target, 0);
};

const genFunc = () => {
  // 闭包缓存
  const cache = {};

  const sumFrom = (nums, target, fromIndex) => {
    const key = `${target}-${fromIndex}`;
    if (cache[key] !== undefined) return cache[key];

    let res;
    // 递归到最后一位
    if (fromIndex === nums.length - 1) {
      res = 0;
      if (nums[fromIndex] + target === 0) res++;
      if (nums[fromIndex] - target === 0) res++;
    } else {
      res =
        sumFrom(nums, target - nums[fromIndex], fromIndex + 1) +
        sumFrom(nums, target + nums[fromIndex], fromIndex + 1);
    }
    cache[key] = res;
    return res;
  };

  return sumFrom;
};

// const nums = [1],
//   target = 1;

// const nums = [1, 1],
//   target = 0;

const nums = [1, 1, 1, 1, 1],
  target = 3;

// const nums = [1, 0],
//   target = 1;

console.log(findTargetSumWays(nums, target));
