// 给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后
// 可以满足 “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，
// 返回 true；否则，返回 false。

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  arr.sort((a, b) => Math.abs(a) - Math.abs(b)); // 根据绝对值排序

  let cache = {},
    short = 0; // 暂未配对的数字

  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) {
      // 配对成功
      cache[arr[i]]--;
      if (cache[arr[i]] === 0) delete cache[arr[i]];

      short--;
    } else {
      // 配对失败， 将当前数字放入需要配对
      cache[arr[i] * 2] = (cache[arr[i] * 2] || 0) + 1;

      // 剩余数字不足以满足全部配对
      if (++short > arr.length - i - 1) return false;
    }
  }

  return true;
};

// 示例 1：

// 输入：arr = [3,1,3,6]
// 输出：false
// 示例 2：

// 输入：arr = [2,1,2,6]
// 输出：false
// 示例 3：

// 输入：arr = [4,-2,2,-4]
// 输出：true
// 解释：可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]

const arr = [3, 1, 3, 6];
// const arr = [4, -2, 2, -4];
// const arr = [2, 1, 2, 1, 1, 1, 2, 2];
console.log(canReorderDoubled(arr));
