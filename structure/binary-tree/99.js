/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { arrayToTree } = require('./base');

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const [first, second] = findIncorrectNodesValue(root);

  inorderRecoverTree(root, first, second);
};

const findIncorrectNodesValue = (root) => {
  let firstIndex, secondIndex;

  const nums = inorderTree(root); // 中序遍历后的值原本是升序的

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[i]) {
      // 错位的位置
      if (firstIndex === undefined) {
        // 先找到的一定是较大值在前的那个
        // 如  1 6 3 4 5 2 7， 一定会先找到 6，3 的错位组合，那么 6 是其中的错位值
        firstIndex = i;
      } else {
        // 后找到的一定是较小值在后的那个
        // 如  1 6 3 4 5 2 7， 一定会后找到 5， 2 的错位组合，那么 2 是其中的错位值
        secondIndex = i + 1;
      }
    }
  }

  // 有时只能找到一个错位组合，
  // 如  1 3 2 4 5 6 7， 交换的是相邻的数字，因此只能 3，2 一个错位组合，均为错位值
  if (secondIndex === undefined) secondIndex = firstIndex + 1;

  // 返回两个错位值
  return [nums[firstIndex], nums[secondIndex]];
};

const inorderTree = (root) => {
  if (!root) return [];
  return [...inorderTree(root.left), root.val, ...inorderTree(root.right)];
};

const inorderRecoverTree = (root, first, second) => {
  if (!root) return false;

  if (inorderRecoverTree(root.left, first, second)) return true;

  // 全部替换完成, second 是较小值， 必然是后改正
  if (root.val === second) {
    root.val = first;
    return true;
  }

  if (root.val === first) root.val = second;

  return inorderRecoverTree(root.right, first, second);
};

// 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。

// 示例 1：

// 输入：root = [1,3,null,null,2]
// 输出：[3,1,null,null,2]
// 解释：3 不能是 1 的左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。
// 示例 2：

// 输入：root = [3,1,4,null,null,2]
// 输出：[2,1,4,null,null,3]
// 解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。
//

// 提示：

// 树上节点的数目在范围 [2, 1000] 内
// -231 <= Node.val <= 231 - 1

// const root = arrayToTree([4, 6, 2, 1, 3, 5, 7]);
const root = arrayToTree([1, 3, null, null, 2]);

recoverTree(root);

console.log(root);
