const TreeNode = function (val, left = null, right = null) {
  this.val = val;

  this.left = left;
  this.right = right;
};

const arrayToTree = (arr) => {
  // 非正常输入
  if (!Array.isArray(arr) || arr.length === 0) return null;

  // 定义每个节点
  let nodes = arr.map((val) => (val === null ? null : new TreeNode(val)));

  // 按层设定关系
  let currLevel = [0],
    nextStart = 1;

  while (nextStart < nodes.length) {
    let level = [];

    for (let i = 0; i < currLevel.length; i++) {
      let node = nodes[currLevel[i]];
      if (!node) break;

      let leftIndex = nextStart + i * 2,
        rightIndex = leftIndex + 1;

      node.left = nodes[leftIndex] || null;
      node.right = nodes[rightIndex] || null;

      level.push(leftIndex);
      level.push(rightIndex);
    }

    currLevel = level;
    nextStart = level[level.length - 1] + 1;
  }

  return nodes[0];
};

module.exports = { TreeNode, arrayToTree };
