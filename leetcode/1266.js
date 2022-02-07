// 输入：points = [[1,1],[3,4],[-1,0]]
// 输出：7
// 解释：一条最佳的访问路径是： [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
// 从 [1,1] 到 [3,4] 需要 3 秒
// 从 [3,4] 到 [-1,0] 需要 4 秒
// 一共需要 7 秒

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let result = 0;

  for (let i = 0; i < points.length - 1; i++) {
    result += Math.max(
      Math.abs(points[i][0] - points[i + 1][0]),
      Math.abs(points[i][1] - points[i + 1][1]),
    );
  }

  return result;
};

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];

console.log(minTimeToVisitAllPoints(points));
