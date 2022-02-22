// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let pos = [];

  const rows = matrix.length,
    cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        pos = pos.concat(calc(rows, cols, i, j));
      }
    }
  }

  for (let [r, c] of pos) {
    matrix[r][c] = 0;
  }
};

const calc = (rows, cols, i, j) => {
  const pos = [];

  for (let r = 0; r < rows; r++) {
    if (r === i) continue;
    pos.push([r, j]);
  }

  for (let c = 0; c < cols; c++) {
    if (c === j) continue;
    pos.push([i, c]);
  }

  return pos;
};

// 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
// 输出：[[1,0,1],[0,0,0],[1,0,1]]
const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(matrix);

console.log(matrix);
