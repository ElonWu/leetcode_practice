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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  return inorder()(root, k);
};

const inorder = () => {
  const cache = new Set();

  const find = (root, k) => {
    if (!root) return false;

    // 中序遍历
    if (find(root.left, k)) return true;

    if (cache.has(root.val)) return true;
    cache.add(k - root.val);

    if (find(root.right, k)) return true;

    return false;
  };

  return find;
};

// 给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

// 示例 1：
// 输入: root = [5,3,6,2,4,null,7], k = 9
// 输出: true

// 示例 2：
// 输入: root = [5,3,6,2,4,null,7], k = 28
// 输出: false

// 提示:
// 二叉树的节点个数的范围是  [1, 104].
// -104 <= Node.val <= 104
// root 为二叉搜索树
// -105 <= k <= 105
