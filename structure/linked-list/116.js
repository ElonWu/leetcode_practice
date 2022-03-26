/**
 * 与 17 题 重复
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  let level = [root];

  while (level.length > 0) {
    let newLevel = [];

    for (let i = 0; i < level.length; i++) {
      const node = level[i];

      node.next = level[i + 1] || null;

      if (node.left) newLevel.push(node.left);
      if (node.right) newLevel.push(node.right);
    }
    level = newLevel;
  }

  return root;
};
