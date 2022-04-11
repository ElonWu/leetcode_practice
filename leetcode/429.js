/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];

  if (!root) return res;

  let level = [root];

  while (level.length) {
    res.push(level.map((node) => node.val));
    level = level.reduce((acc, curr) => acc.concat(curr.children || []), []);
  }

  return res;
};
