/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let r = 0,
    c = 0,
    i = 1,
    end = Math.pow(n, 2),
    result = [];

  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(0));
  }

  let dir = 'R';

  while (i <= end) {
    result[r][c] = i++;

    // 根据方向更新位置， 并更新下一个方向
    switch (dir) {
      case 'R':
        c++;
        if (c === n - 1 || result[r][c + 1]) dir = 'B';
        break;

      case 'B':
        r++;
        if (r === n - 1 || result[r + 1][c]) dir = 'L';
        break;

      case 'L':
        c--;
        if (c === 0 || result[r][c - 1]) dir = 'T';
        break;

      case 'T':
        r--;
        if (r === 0 || result[r - 1][c]) dir = 'R';
        break;
    }
  }
  return result;
};

console.log(generateMatrix(3));
