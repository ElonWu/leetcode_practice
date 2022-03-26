/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  return generateTreeInRange(1, n);
};

const cache = {};

const generateTreeInRange = (from, to) => {
  if (from > to) return [null];
  if (from === to) return [new TreeNode(from)];

  const key = `${from}-${to}`;

  if (cache[key]) return cache[key];

  let res = [];

  for (let i = from; i <= to; i++) {
    // 以 i 为根节点时，左右的可能的组合
    const leftChoices = generateTreeInRange(from, i - 1);
    const rightChoices = generateTreeInRange(i + 1, to);

    for (let left of leftChoices) {
      for (let right of rightChoices) {
        const root = new TreeNode(i);
        root.left = left;
        root.right = right;
        res.push(root);
      }
    }
  }

  cache[key] = res;
  return res;
};
