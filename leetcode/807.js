/**
 * @param {number[][]} grid
 * @return {number}
 */
// var maxIncreaseKeepingSkyline = function (grid) {
//   let list = filterFromRight(grid);
//   console.log('right', list);

//   return filterFromUp(grid, list);
// };

// var filterFromRight = function (grid) {
//   let avaliable = [];

//   for (let i = 0; i < grid.length; i++) {
//     const row = grid[i];

//     let max = row[0];

//     for (let i = 1; i < row.length; i++) {
//       if (row[i] > max) max = row[i];
//     }

//     for (let j = 0; j < row.length; j++) {
//       let inc = max - row[j];
//       if (inc > 0) avaliable.push({ row: i, col: j, inc });
//     }
//   }
//   return avaliable;
// };

// var filterFromUp = function (grid, list) {
//   let maxCol = {},
//     result = 0;

//   list.forEach((li) => {
//     let col = li.col;

//     let max = maxCol[col]; // 优先使用缓存

//     // 计算 col 列最大值
//     if (!max) {
//       max = grid[0][col];

//       for (let i = 1; i < grid.length; i++) {
//         let curr = grid[i][col];
//         if (curr > max) max = curr;
//       }

//       // 缓存
//       maxCol[col] = max;
//     }

//     // 如果在列也可增加， 取最小值
//     if (grid[li.row][col] < max) {
//       result += Math.min(li.inc, max - grid[li.row][col]);
//     }
//   });

//   return result;
// };

var maxIncreaseKeepingSkyline = function (grid) {
  const rows = grid.length,
    cols = grid[0].length,
    maxCols = {};
  let result = 0;

  for (row = 0; row < rows; row++) {
    // 查询每列最大值
    let maxRow = 0;
    for (let col = 0; col < cols; col++) {
      maxRow = Math.max(maxRow, grid[row][col]);
    }

    if (maxRow <= 0) continue;

    for (let col = 0; col < cols; col++) {
      // 查询每个格子在 row 上的最大增量
      const curr = grid[row][col];
      let incRow = maxRow - curr;

      if (incRow <= 0) continue;

      // 计算并缓存 col 的最大值
      let maxCol = maxCols[col];
      if (!maxCol) {
        maxCol = 0;
        for (let triggerRow = 0; triggerRow < rows; triggerRow++) {
          maxCol = Math.max(maxCol, grid[triggerRow][col]);
        }
      }

      if (maxCol <= 0) continue;

      // 缓存
      maxCols[col] = maxCol;

      // 查询在 row 可增格子在 col 的最大增量
      const incCol = maxCol - curr;

      if (incCol <= 0) continue;
      // 在两个方向都可增
      result += Math.min(incRow, incCol);
    }
  }
  return result;
};

const grids = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];

console.log(maxIncreaseKeepingSkyline(grids));
