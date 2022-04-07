// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let maxSize = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // 不可能的坐上角
      if (matrix[i][j] !== '1') continue;
      // 当前 row 的最大宽度 不会超过 maxSize，直接尝试下一列
      if (matrix[0].length - j <= maxSize) break;
      // 即不再存在超过 maxSize 的矩形
      if (matrix.length - i <= maxSize) return Math.pow(maxSize, 2);

      // 以 i,j 为左上角
      maxSize = Math.max(maxSize, maxSizeFrom(matrix, i, j));
    }
  }

  return Math.pow(maxSize, 2);
};

const maxSizeFrom = (matrix, i, j) => {
  let width = 1,
    offset = 1;

  while (true) {
    // 当前 offset 不允许扩张
    if (!canExpandFrom(matrix, i, j, offset)) return width + offset - 1;
    // 尝试扩张
    offset++;
  }
};

const canExpandFrom = (matrix, i, j, offset) => {
  if (i + offset === matrix.length || j + offset === matrix[0].length)
    return false;

  for (let step = 0; step <= offset; step++) {
    if (matrix[i + step][j + offset] !== '1') return false;
  }

  for (let step = 0; step < offset; step++) {
    if (matrix[i + offset][j + step] !== '1') return false;
  }

  return true;
};

// 示例 1：
// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：4

// 示例 2：
// 输入：matrix = [["0","1"],["1","0"]]
// 输出：1

// 示例 3：
// 输入：matrix = [["0"]]
// 输出：0

// 提示：
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] 为 '0' 或 '1'

const matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];

console.log(maximalSquare(matrix));
