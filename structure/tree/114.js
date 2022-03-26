// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  flattenWithHeadAndTail(root);
};

const flattenWithHeadAndTail = (root) => {
  if (!root) return { head: null };

  const left = flattenWithHeadAndTail(root.left);
  const right = flattenWithHeadAndTail(root.right);

  root.left = null;

  // 左右都无
  if (left.head === null && right.head === null) {
    return { head: root, tail: root };
  }

  // 左无
  if (left.head === null) {
    root.right = right.head;
    return { head: root, tail: right.tail };
  }

  // 右无
  if (right.head === null) {
    root.right = left.head;
    return { head: root, tail: left.tail };
  }

  // 左右都有
  root.right = left.head;
  left.tail.right = right.head;
  return { head: root, tail: right.tail };
};
