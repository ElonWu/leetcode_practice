class TreeNode {
  constructor(value, left, right) {
    this.value = value;

    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

module.exports = TreeNode;
