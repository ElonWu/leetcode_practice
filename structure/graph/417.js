/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const row = heights.length,
    cols = heights[0].length;

  const stops = [];

  for (let i = 0; i < row; i++) {
    stops.push([i, 0]);
  }

  for (let i = 1; i < cols; i++) {
    stops.push([0, i]);
  }

  console.log(stops);
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
// 输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

console.log(pacificAtlantic(heights));
