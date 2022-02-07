/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  let result = [],
    destCache = {};

  // 终点
  for (let i = 0; i < edges.length; i++) {
    destCache[edges[i][1]] = true;
  }

  for (let i = 0; i < n; i++) {
    if (!destCache[i]) result.push(i);
  }

  return result;
};

const n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ];

findSmallestSetOfVertices(n, edges);
