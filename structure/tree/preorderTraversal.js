/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root.value === null) return [];
  return [
    root.value,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
};
