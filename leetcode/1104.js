var pathInZigZagTree = function (label) {
	let level = 0,
		max = 1,
		levelInfo = {
			1: { max: 1, min: 1 },
		};

	while (max < label) {
		level++;

		max += Math.pow(2, level);

		levelInfo[level + 1] = {
			max,
			min: max - (Math.pow(2, level) - 1),
		};
	}

	let result = [label];
	let index = Math.floor(
		(level % 2 === 0 ? max - label : label - levelInfo[level + 1].min) / 2
	);

	while (level) {
		result.unshift(
			level % 2 === 1
				? levelInfo[level].max - index
				: levelInfo[level].min + index
		);
		index = Math.floor(index / 2);
		level--;
	}

	return result;
};

console.log(pathInZigZagTree(14));

// function TreeNode(val) {
// 	this.val = val;
// 	this.left = this.right = null;
// }

// const source = new TreeNode(1);

// source.left = new TreeNode(3);
// source.right = new TreeNode(2);

// source.left.left = new TreeNode(4);
// source.left.right = new TreeNode(5);
// source.right.left = new TreeNode(6);
// source.right.right = new TreeNode(7);

// source.left.left.left = new TreeNode(15);
// source.left.left.right = new TreeNode(14);
// source.left.right.left = new TreeNode(13);
// source.left.right.right = new TreeNode(12);
// source.right.left.left = new TreeNode(11);
// source.right.left.right = new TreeNode(10);
// source.right.right.left = new TreeNode(9);
// source.right.right.right = new TreeNode(8);
