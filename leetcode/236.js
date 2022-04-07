/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let pList = [],
    qList = [];

  findPathTo(root, p, pList);
  findPathTo(root, q, qList);

  for (let node of pList) {
    if (qList.includes(node)) return node;
  }
};

const findPathTo = (root, target, path) => {
  if (!root) return false;

  if (
    // 当前节点
    root === target ||
    // 在左分支
    findPathTo(root.left, target, path) ||
    // 在右分支
    findPathTo(root.right, target, path)
  ) {
    path.push(root);
    return true;
  }

  // 不在这个节点以内
  return false;
};
