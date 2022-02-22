/**
 * @param {number[][]} grid
 * @return {number}
 */

let cache = {};

var minPathSum = function (grid) {
  const res = pathSum(0, 0, grid);

  cache = {};
  return res;
};

const pathSum = (row, col, grid) => {
  const lastRow = grid.length - 1,
    lastCol = grid[0].length - 1,
    curr = grid[row][col];

  let key = `${row},${col}`;

  if (cache[key] === undefined)
    if (row === lastRow && col === lastCol) {
      // 到达终点
      cache[key] = grid[row][col];
    }
    // 到达边缘
    else if (row === lastRow) {
      cache[key] = curr + pathSum(row, col + 1, grid);
    } else if (col === lastCol) {
      cache[key] = curr + pathSum(row + 1, col, grid);
    }
    // 有两条路径
    else {
      cache[key] =
        curr +
        Math.min(pathSum(row, col + 1, grid), pathSum(row + 1, col, grid));
    }

  return cache[key];
};

// const source = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1],
// ];
const source = [
  [3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3],
  [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2],
  [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9],
  [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7],
  [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8],
  [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9],
  [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1],
  [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3],
  [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3],
  [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8],
  [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3],
  [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3],
  [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3],
  [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5],
  [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2],
  [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0],
  [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0],
  [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7],
];

console.log(minPathSum(source));
