/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // 当天【空仓】和 【持有】的最大收益
  let prev = [0, prices[0] * -1]; // 第一天

  for (let i = 1; i < prices.length; i++) {
    prev = [
      // 第 i 天 【空仓】的最大收益
      Math.max(
        prev[1] + prices[i] - fee, // 情况A：前一天【持有】，此时卖出, 并支付 fee
        prev[0], // 情况B: 前一天【空仓】， 此时保持
      ),
      // 第 i 天 【持有】的最大收益
      Math.max(
        prev[1], // 情况A：前一天【持有】，此时保持
        prev[0] - prices[i], // 情况B: 前一天【空仓】， 此时买入
      ),
    ];
  }

  // 最后一天的最大收益
  return prev[0];
};

// console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
