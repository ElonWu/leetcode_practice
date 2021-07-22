const Tree = require("../structure/tree");

var kthSmallest = function (root, k) {
	if (root === null) return { k }; // 当前为 null, 无排除

	let leftRes = kthSmallest(root.left, k);

	if (typeof leftRes === "number") return leftRes; // 当前左分支找到目标， 即 leftRes

	if (leftRes.k === 1) return root.val; // 当前节点即为目标

	// 已排除更小的项
	return kthSmallest(root.right, leftRes.k - 1); // 当前右分支的结果，为当前分支的结果
};

const source = new Tree([5, 3, 6, 2, 4, 1]);

console.log(kthSmallest(source.root, 3));
