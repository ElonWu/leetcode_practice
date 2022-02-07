// 输入：graph = [[1,2],[3],[3],[]]
// 输出：[[0,1,3],[0,2,3]]
// 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let history = [[0]],
    final = [];

  while (history.length) {
    let next = [];
    for (let path of history) {
      const dests = graph[path[path.length - 1]];

      dests.forEach((dest) => {
        const nextPath = path.concat(dest);

        if (dest === graph.length - 1) {
          final.push(nextPath);
        } else if (graph[dest].length) {
          next.push(nextPath);
        }
      });
    }

    history = next;
  }

  console.log(history, final);

  return final;
};

const graph = [[1, 2], [3], [3], []];

console.log(allPathsSourceTarget(graph));
