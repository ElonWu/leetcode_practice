/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 没有元素
  if (preorder.length === 0) return null;
  // 单个元素
  if (preorder.length === 1) return new TreeNode(preorder[0]);

  // 多个元素；

  // 前序的第一个元素，就是根节点
  let root = new TreeNode(preorder[0]);
  // 中序根节点位置
  const rootIndexOfInorder = inorder.findIndex((item) => item === preorder[0]);

  // 中序的根节点左右，分别是左、右子树的中序
  const leftInorder = inorder.slice(0, rootIndexOfInorder);
  const rightInorder = inorder.slice(rootIndexOfInorder + 1);

  // 前序中节点（第一个元素）之后，对等数量的元素，就是左、右子树的前序
  const leftPreorder = preorder.slice(1, rootIndexOfInorder + 1);
  const rightPreorder = preorder.slice(rootIndexOfInorder + 1);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};

// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

// 示例 1:
// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

// 示例 2:
// 输入: preorder = [-1], inorder = [-1]
// 输出: [-1]

// 提示:
// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder 和 inorder 均 无重复 元素
// inorder 均出现在 preorder
// preorder 保证 为二叉树的前序遍历序列
// inorder 保证 为二叉树的中序遍历序列
