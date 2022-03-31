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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  convert(root, 0);
  return root;
};

const convert = (root, accu) => {
  // 访问到叶子结点时，不更新
  if (!root) return accu;

  // 逆中序遍历，依次访问较大值
  accu = convert(root.right, accu);

  // 更新当前 node
  root.val += accu;
  // 累计较大值的和
  accu = root.val;

  return convert(root.left, accu);
};
