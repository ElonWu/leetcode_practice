/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  const zerosSet = new Set(mines.map(([x, y]) => `${x}-${y}`));

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (zerosSet.has(`${i}-${j}`)) continue;

      max = Math.max(max, sizeAt(i, j, n, zerosSet));
    }
  }

  return max;
};

const sizeAt = (i, j, n, zerosSet) => {
  const awayEdge = i > 0 && i < n - 1 && j > 0 && j < n - 1;

  if (!awayEdge) return 1;

  let max = 1;
};
