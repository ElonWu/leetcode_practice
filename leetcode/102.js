// const Tree = require("../structure/tree");

// var levelOrder = function (root) {
// 	let logs = [],
// 		children = [root];

// 	while (children.length) {
// 		let result = getNextLevel(children);

// 		if (result.levelVals.length) {
// 			logs.push(result.levelVals);
// 		}
// 		children = result.children;
// 	}
// 	return logs;
// };

// function getNextLevel(branches) {
// 	let levelVals = [],
// 		children = [];

// 	for (let i = 0; i < branches.length; i++) {
// 		if (branches[i]) {
// 			let { val, left, right } = branches[i];

// 			levelVals.push(val);
// 			children.push(left);
// 			children.push(right);
// 		}
// 	}

// 	return { levelVals, children };
// }

// const tree = new Tree([3, 9, 20, 15, 7]);

// console.log(levelOrder(tree.root));

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
 * @return {number[][]}
 */
var levelOrder = function (root) {};
