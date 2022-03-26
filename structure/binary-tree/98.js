const TreeNode = require('./base');

// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return verify(root, -Infinity, Infinity);
};

const verify = (root, min, max) => {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  // root 左子树，最大值不超过 root.val， 最小不超过历史分岔点的最小值
  // root 右子树，最小值不小于 root.val，最大值不超过历史分岔点的最大值
  return verify(root.left, min, root.val) && verify(root.right, root.val, max);
};

const node = new TreeNode(2);
