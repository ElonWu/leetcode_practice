/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let res = [];

  for (let r = 0; r < img.length; r++) {
    let row = [];
    for (let c = 0; c < img[0].length; c++) {
      row[c] = getAvg(img, r, c);
    }
    res.push(row);
  }

  return res;
};

const getAvg = (img, r, c) => {
  let count = 0,
    sum = 0;

  for (let i = r - 1; i <= r + 1; i++) {
    if (i < 0 || i >= img.length) continue;
    for (let j = c - 1; j <= c + 1; j++) {
      if (j < 0 || j >= img[0].length) continue;
      sum += img[i][j];
      count++;
    }
  }
  return Math.floor(sum / count);
};

const img = [
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
];
// 输出: [[137,141,137],[141,138,141],[137,141,137]]

console.log(imageSmoother(img));
