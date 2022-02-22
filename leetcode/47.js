// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

//

// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const storage = {};

  for (let i = 0; i < nums.length; i++) {
    storage[nums[i]] = (storage[nums[i]] || 0) + 1;
  }

  return permute(storage);
};

const permute = (storage) => {
  let result = [];

  for (let key of Object.keys(storage)) {
    if (storage?.[key] > 0) {
      const nextLevel = permute(
        Object.assign({}, storage, { [key]: storage[key] - 1 }),
      );

      result = result.concat(nextLevel.map((arr) => [key, ...arr]));
    }
  }

  return result?.length ? result : [result];
};

console.log(permuteUnique([1, 2, 3]));
