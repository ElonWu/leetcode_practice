// 输入：rings = "B0B6G0R6R0R6G9"
// 输出：1
// 解释：
// - 编号 0 的杆上有 3 个环，集齐全部颜色：红、绿、蓝。
// - 编号 6 的杆上有 3 个环，但只有红、蓝两种颜色。
// - 编号 9 的杆上只有 1 个绿色环。
// 因此，集齐全部三种颜色环的杆的数目为 1

/**
 * @param {string} rings
 * @return {number}
 */

var countPoints = function (rings) {
  let result = 0,
    cache = {};

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i],
      ring = rings[i + 1];

    cache[ring] = cache[ring] || [];

    if (cache[ring].includes(color)) continue;

    switch (color) {
      case 'R':
        cache[ring][0] = 'R';
        break;
      case 'G':
        cache[ring][1] = 'G';
        break;
      case 'B':
        cache[ring][2] = 'B';
        break;
    }

    if (cache[ring].join('') === 'RGB') result += 1;
  }

  return result;
};

const str = 'B0R0G0R9R0B0G0';
console.log(countPoints(str));
