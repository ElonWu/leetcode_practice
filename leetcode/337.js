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
 * @return {number}
 */
var rob = function (root) {
  return Math.max(...fingMaxStratey(root));
};

const fingMaxStratey = (root) => {
  if (!root) return [0, 0];

  const [robLeftMax, notRobLeftMax] = fingMaxStratey(root.left);
  const [robRightMax, notRobRightMax] = fingMaxStratey(root.right);

  // 当前节点的最大值，以下两种情况的最大值
  return [
    // 1. 偷当前节点，左右子树「都不偷的情况下的」各自最大值之和 + 当前节点的值
    notRobLeftMax + notRobRightMax + root.val,
    // 2. 不偷当前节点，左右子树各自最大值之和
    Math.max(robLeftMax, notRobLeftMax) + Math.max(robRightMax, notRobRightMax),
  ];
};
