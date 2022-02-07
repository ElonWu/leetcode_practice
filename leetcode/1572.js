/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0,
    w = mat.length;

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < w; j++) {
      if (Math.abs(w / 2 - i) === Math.abs(w / 2 - j)) {
        result += mat[i][j];
      }
    }
  }

  return result;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalSum(mat));
