// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    res.push(calcRow(i, res[i - 1]));
  }

  return res;
};

const calcRow = (row, prevRow) => {
  let res = new Array(row + 1).fill(0);

  let left = 0,
    right = row;

  while (left <= right) {
    const curr = left === 0 ? 1 : prevRow[left - 1] + prevRow[left];

    res[left] = curr;

    if (right === left) break;

    res[right] = curr;

    left++;
    right--;
  }

  return res;
};

console.log(generate(8));
