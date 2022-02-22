/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let candidates = [];

  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];

    const firstIncluded = candidates.includes(u);
    const secondIncluded = candidates.includes(v);
  }
};

// 输入：edges = [[1,2],[2,3],[4,2]]
// 输出：2
// 解释：如上图所示，节点 2 与其他每个节点都相连，所以节点 2 是中心节点。

// 输入：edges = [[1,2],[5,1],[1,3],[1,4]]
// 输出：1

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ]),
);
