/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  let res = 0,
    prevSatis = 0;

  satisfaction.sort((a, b) => a - b);

  while (satisfaction.length) {
    // 每次尝试加入剩余里喜爱程度最高的
    // 0 * x1 + 1 * x2 + 2 * x3 ....
    // 1 * x1 + 2 * x2 + 3 * x3 ....
    // 增加 offset 即已加入的 satisfaction 的和
    let satisOffset = satisfaction.pop() + prevSatis;

    if (satisOffset <= 0) break;

    prevSatis = satisOffset;
    res += satisOffset;
  }

  return res;
};

console.log(maxSatisfaction([-1, -8, 0, 5, -9]));
