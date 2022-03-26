/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const rows = image.length,
    cols = image[0].length,
    target = image[sr][sc];

  image[sr][sc] = newColor;

  let visited = new Set(),
    pos = [[sr, sc]];

  while (pos.length > 0) {
    let nextPos = [];
    for (let [r, c] of pos) {
      const dirs = [
        [r - 1, c],
        [r + 1, c],
        [r, c - 1],
        [r, c + 1],
      ];

      for (let [r0, c0] of dirs) {
        // 超出边界
        if (r0 < 0 || r0 >= rows || c0 < 0 || c0 >= cols) continue;
        // 已经访问过
        if (visited.has(`${r0}-${c0}`)) continue;
        // 记录本次访问
        visited.add(`${r0}-${c0}`);

        // 不满足更新条件
        if (image[r0][c0] !== target) continue;
        // 更新
        image[r0][c0] = newColor;
        // 记录为下一次触发点
        nextPos.push([r0, c0]);
      }

      pos = nextPos;
    }
  }

  return image;
};

// 有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。
// 你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。
// 为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上 像素值与初始坐标相同的相连像素点，
// 接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上 像素值与初始坐标相同的相连像素点，……，
// 重复该过程。将所有有记录的像素点的颜色值改为 newColor 。
// 最后返回 经过上色渲染后的图像 。

// 示例 1:
// 输入: image = [[1,1,1],[1,1,0],[1,0,1]]，sr = 1, sc = 1, newColor = 2
// 输出: [[2,2,2],[2,2,0],[2,0,1]]
// 解析: 在图像的正中间，(坐标(sr,sc)=(1,1)),在路径上所有符合条件的像素点的颜色都被更改成2。
// 注意，右下角的像素没有更改为2，因为它不是在上下左右四个方向上与初始点相连的像素点。

// 示例 2:
// 输入: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
// 输出: [[2,2,2],[2,2,2]]
//

// 示例 3:
// 输入: image = [[0,0,0],[0,1,0]], sr = 1, sc = 1, newColor = 2
// 输出: [[0,0,0],[0,2,0]]
//

// 提示:
// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], newColor < 216
// 0 <= sr < m
// 0 <= sc < n

const image = [
    [0, 0, 0],
    [0, 1, 0],
  ],
  sr = 1,
  sc = 1,
  newColor = 2;

console.log(floodFill(image, sr, sc, newColor));
