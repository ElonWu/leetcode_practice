/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function (points, angle, location) {
  let dup = 0, // 与当前点重合
    max = 0,
    angles = [];

  // 所有点和 location 的夹角；
  points.forEach((p) => {
    const diffX = p[0] - location[0],
      diffY = p[1] - location[1];

    if (diffX === 0 && diffY === 0) dup++;
    // 重合
    else if (diffX === 0) angles.push(0);
    // 0 deg
    else if (diffY === 0) angles.push(diffX > 0 ? 90);
    // 90 deg
    else {
      const a = (Math.atan(diffY / diffX) / Math.PI) * 180;
      if ((diffX < 0 && diffY < 0) || a < 0) angles.push(a + 180);
      // 兼容第三，四象限
      else angles.push(a);
    }
  });

  angles.sort((a, b) => a - b);

  // 遍历所有夹角，查询在 angle 范围内的最大点数
  for (let i = 0; i < angles.length; i++) {
    // 以当前点为轴
    let curr = angles[i];

    // curr 之前的点增加 2PI， 以保证可被大角度扫描到
    const range = angles
      .slice(i)
      .concat(angles.slice(0, i).map((a) => a + 360));

    // 扫过 angle 角度
    const edgeIndex = range.findIndex((a) => a > curr + angle);

    // 未查到超出 curr + angle, 表示全部在扫描范围内
    const count = edgeIndex === -1 ? angles.length : edgeIndex;

    // 更新最多点数
    max = Math.max(max, count);
  }

  console.log({
    angles,
    max,
    dup,
  });

  return max + dup;
};

// const points = [
//     [1, 1],
//     [2, 2],
//     [3, 3],
//     [4, 4],
//     [1, 2],
//     [2, 1],
//   ],
//   angle = 0,
//   location = [1, 1];

const points = [
    [8, 67],
    [6, 72],
    [7, 23],
    [62, 82],
    [16, 54],
    [6, 63],
    [55, 4],
    [40, 3],
    [72, 12],
    [2, 69],
    [61, 58],
    [55, 40],
    [40, 55],
    [63, 19],
    [45, 91],
    [20, 89],
    [62, 72],
    [68, 40],
    [75, 97],
    [73, 75],
    [93, 38],
    [69, 38],
    [7, 40],
    [36, 95],
    [29, 88],
    [45, 51],
    [19, 21],
  ],
  angle = 28,
  location = [17, 3];

console.log(visiblePoints(points, angle, location));
