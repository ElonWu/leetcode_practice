/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let prev = [1];

  for (let row = 0; row <= rowIndex; row++) {
    const n = row + 1,
      mid = row / 2,
      next = [];

    for (let i = 0; i < mid; i++) {
      next[i] = next[n - 1 - i] = calc(prev, i);
    }

    if (n % 2) next[mid] = calc(prev, mid);

    prev = next;
  }
  return prev;
};

const calc = (prev, i) => {
  if (i === 0) return 1;
  return prev[i - 1] + prev[i];
};

console.log(getRow(4));
