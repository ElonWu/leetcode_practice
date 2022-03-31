// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
// 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，
// 并以列表形式返回。你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。
// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];

  for (let i = 0; i < candidates.length; i++) {
    let rest = target - candidates[i];

    if (rest < 0) continue; // 因 candidates 未排序

    // 已经达成目标
    if (rest === 0) {
      res.push([candidates[i]]);
      continue;
    }

    // 加入当前元素后，剩余目标的组合
    let restRes = combinationSum(candidates.slice(i), rest);

    // 没有可能组合
    if (restRes.length) {
      res = res.concat(restRes.map((item) => item.concat(candidates[i])));
    }
  }

  return res;
};

const candidates = [2, 3, 6, 7],
  target = 7;
// 输出：[[2,2,3],[7]]

console.log(combinationSum(candidates, target));
