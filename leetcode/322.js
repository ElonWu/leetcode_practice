// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  return genMin()(coins, amount);
};

const genMin = () => {
  // 缓存计算过的结果
  const cache = { 0: 0 };

  const fn = (coins, amount) => {
    // 命中缓存
    if (cache[amount] !== undefined) return cache[amount];

    // 默认无有效组成
    let min = -1;

    for (let coin of coins) {
      if (amount < coin) continue;

      // 当前金额的最小硬币数量 = 1 + 剩余金额的最小硬币数量
      const res = fn(coins, amount - coin);
      // 如果是 -1, 则说明当前组合不可行
      if (res >= 0) {
        min = min < 0 ? res + 1 : Math.min(min, res + 1);
      }
    }

    // 存入缓存
    cache[amount] = min;

    return min;
  };

  return fn;
};

// 示例 1：
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1

// 示例 2：
// 输入：coins = [2], amount = 3
// 输出：-1

// 示例 3：
// 输入：coins = [1], amount = 0
// 输出：0

// const coins = [1, 2, 5],
//   amount = 11;

// const coins = [2],
//   amount = 3;

const coins = [1],
  amount = 0;

console.log(coinChange(coins, amount));
