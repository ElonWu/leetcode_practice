/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (!edges.length) return [0];

  const edgesHash = {};

  for (let [p1, p2] of edges) {
    edgesHash[p1] = (edgesHash[p1] || []).concat(p2);
    edgesHash[p2] = (edgesHash[p2] || []).concat(p1);
  }

  let minDepth,
    p = [];

  for (let key of Object.keys(edgesHash)) {
    let root = parseInt(key),
      visited = [root],
      level = [root],
      depth = 1;

    while (level.length) {
      const nextLevel = level.reduce((accu, curr) => {
        for (let node of edgesHash[curr]) {
          // 避免重复访问
          if (!visited.includes(node)) {
            // 更新已访问
            visited.push(node);
            accu.push(node);
          }
        }
        return accu;
      }, []);

      if (!nextLevel.length) break;

      // 当前循环更新
      depth++;
      level = nextLevel;

      // 已经超出
      if (minDepth && depth > minDepth) break;
    }

    // 更新最低高度
    if (p.length === 0 || depth < minDepth) {
      p = [root];
      minDepth = depth;
    }
    // 追加
    else if (depth === minDepth) {
      p.push(root);
    }
  }

  return p;
};

console.log(
  findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ]),
);
