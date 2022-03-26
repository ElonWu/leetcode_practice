// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 无元素
  if (inorder.length === 0) return null;
  // 单个元素
  if (inorder.length === 1) return new TreeNode(inorder[0]);

  // 多个元素
  // 后序的最后一个元素，就是根节点
  const root = new TreeNode(postorder[postorder.length - 1]);

  // 中序根节点位置
  const rootIndexOfInorder = inorder.findIndex(
    (item) => item === postorder[postorder.length - 1],
  );

  // 中序的根节点左右，分别是左、右子树的中序
  const leftInorder = inorder.slice(0, rootIndexOfInorder);
  const rightInorder = inorder.slice(rootIndexOfInorder + 1);

  // 后序 从后往前除去根元素（最后一个），对等数量的元素，就是右、左子树的后序
  const rightPostOrder = postorder.slice(
    postorder.length - rightInorder.length - 1,
    postorder.length - 1,
  );

  const leftPostOrder = postorder.slice(
    0,
    postorder.length - rightInorder.length - 1,
  );

  root.left = buildTree(leftInorder, leftPostOrder);
  root.right = buildTree(rightInorder, rightPostOrder);

  return root;
};
