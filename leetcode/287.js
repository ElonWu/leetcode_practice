function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var findDuplicate = function (nums) {
	let originalRoot = new TreeNode(nums[0]);

	for (let i = 1; i < nums.length; i++) {
		let root = originalRoot;

		let result = insert(root, nums[i]);

		if (result) return result;
	}
};

function insert(root, val) {
	if (val === root.val) return val; // 找到重复值

	if (val < root.val) {
		// 继续向左侧子分支寻找位置
		if (root.left) return insert(root.left, val);

		// 放置元素在左分支
		root.left = new TreeNode(val);
		return null;
	} else {
		// 继续向右侧子分支寻找位置
		if (root.right) return insert(root.right, val);

		// 放置元素在右分支
		root.right = new TreeNode(val);
		return null;
	}
}

const source = [1, 3, 4, 2, 2];

console.log(findDuplicate(source));
