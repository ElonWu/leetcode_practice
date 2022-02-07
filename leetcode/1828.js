/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  return queries.map((q) => {
    let count = 0;

    for (let p of points) {
      if (
        Math.pow(p[0] - q[0], 2) + Math.pow(p[1] - q[1], 2) <=
        Math.pow(q[2], 2)
      ) {
        count++;
      }
    }

    return count;
  });
};

const points = [
    [1, 3],
    [3, 3],
    [5, 3],
    [2, 2],
  ],
  queries = [
    [2, 3, 1],
    [4, 3, 1],
    [1, 1, 2],
  ];

console.log(countPoints(points, queries));
