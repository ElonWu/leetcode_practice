/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];

  let level = [{ node: root, path: [root.val], sum: root.val }],
    res = [];

  while (level.length) {
    const next = nextLevel(level, targetSum);

    if (next.match) res = res.concat(next.match);

    level = next.level;
  }

  return res;
};

const nextLevel = (nodes, targetSum) => {
  let level = [],
    match = [];

  nodes.forEach(({ node, path, sum }) => {
    if (!node.left && !node.right && sum === targetSum) {
      match.push(path);
    } else {
      if (node.left) {
        level.push({
          node: node.left,
          path: path.concat(node.left.val),
          sum: sum + node.left.val,
        });
      }

      if (node.right) {
        level.push({
          node: node.right,
          path: path.concat(node.right.val),
          sum: sum + node.right.val,
        });
      }
    }
  });

  return { level, match };
};

// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

// 示例 1：
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]

// 示例 2：
// 输入：root = [1,2,3], targetSum = 5
// 输出：[]

// 示例 3：
// 输入：root = [1,2], targetSum = 0
// 输出：[]
//

// 提示：
// 树中节点总数在范围 [0, 5000] 内
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000
