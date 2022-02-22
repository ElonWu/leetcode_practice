/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return 0;

  const rows = matrix.length,
    cols = matrix[0].length,
    dirs = {
      r: 'd',
      d: 'l',
      l: 'u',
      u: 'r',
    };

  let pos = [0, 0],
    dir = 'r',
    posHistory = [],
    result = [];

  while (result.length < rows * cols) {
    posHistory.push(pos.join(','));

    result.push(matrix[pos[0]][pos[1]]);

    // 正常的下一位置
    let nextPos = calcNextPos(pos, dir);

    let next = matrix[nextPos[0]]?.[nextPos[1]];

    // 需要转向
    if (!next || posHistory.includes(nextPos.join(','))) {
      // 转向
      dir = dirs[dir];
      // 下一位置
      nextPos = calcNextPos(pos, dir);
    }

    pos = nextPos;
  }
  return result;
};

const calcNextPos = (pos, dir) => {
  switch (dir) {
    case 'r':
      return [pos[0], pos[1] + 1];
    case 'd':
      return [pos[0] + 1, pos[1]];
    case 'l':
      return [pos[0], pos[1] - 1];
    case 'u':
      return [pos[0] - 1, pos[1]];
  }
};

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

console.log(
  spiralOrder([
    [23, 18, 20, 26, 25],
    [24, 22, 3, 4, 4],
    [15, 22, 2, 24, 29],
    [18, 15, 23, 28, 28],
  ]),
);
