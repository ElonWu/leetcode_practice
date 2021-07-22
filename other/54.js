function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;

	this.append = (newVal) => {
		let curr = this;

		while (true) {
			if (newVal < curr.val) {
				if (curr.left === null) {
					curr.left = new TreeNode(newVal);
					break;
				} else {
					curr = curr.left;
					continue;
				}
			} else if (newVal > curr.val) {
				if (curr.right === null) {
					curr.right = new TreeNode(newVal);
					break;
				} else {
					curr = curr.right;
					continue;
				}
			}

			console.log("null");
			return null;
		}
	};

	this.log = () => {
		let curr = this;
		console.log(this.val);
		if (curr.left) curr.left.log();
		if (curr.right) curr.right.log();
	};
}

let root = new TreeNode(41);

let source = [
	37,
	44,
	24,
	39,
	42,
	48,
	1,
	35,
	38,
	40,
	43,
	46,
	49,
	0,
	2,
	30,
	36,
	45,
	47,
	4,
	29,
	32,
	3,
	9,
	26,
	31,
	34,
	7,
	11,
	25,
	27,
	33,
	6,
	8,
	10,
	16,
	28,
	5,
	15,
	19,
	12,
	18,
	20,
	13,
	17,
	22,
	14,
	21,
	23,
];
for (let i = 0; i < source.length; i++) {
	root.append(source[i]);
}

// root.log();

// var kthLargest = function (root, k) {
// 	let list;

// 	// 记录当前二叉树下全部外层右节点
// 	while (root) {
// 		if (list) root.prev = list;
// 		list = root;
// 		root = root.right;
// 	}

// 	// 由大到小 循环外层右节点， 依次占据当前最大的位置
// 	while (list) {
// 		k--; // 占据前排位置

// 		// 如果 k 刚好被占完，那么当前的 val 就是全体第 K 大
// 		if (k === 0) return list.val;

// 		// 当前右分支的子分支， 也大于上一个右侧， 所以优先执行占位
// 		if (list.left) {
// 			// 递归执行
// 			let result = kthLargest(list.left, k);
// 			if (typeof result === "number") return result;
// 			k = result.k;
// 		}

// 		list = list.prev;
// 	}
// 	// 如果找到目标值， 返回 number;  否则，返回更新的 k
// 	return { k };
// };

// console.log(source.length);

var kthLargest = function (root, k) {
	let result;
	forEachNode(root, (node) => {
		if (--k === 0) result = node.val;
	});

	return result;
};

function forEachNode(node, cb) {
	if (node) {
		forEachNode(node.right, cb);
		cb(node);
		forEachNode(node.left, cb);
	}
}

console.log(kthLargest(root, 25));
