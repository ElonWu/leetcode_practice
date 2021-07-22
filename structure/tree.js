class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class Tree {
	constructor(vals) {
		this.root = null;
		if (vals instanceof TreeNode) {
			this.root = vals;
		} else if (Array.isArray(vals)) {
			for (let i = 0; i < vals.length; i++) {
				this.insert(vals[i]);
			}
		}
	}

	insert(val) {
		if (this.search(val)) return null;

		const currNode = new TreeNode(val, null, null);

		if (!this.root) {
			this.root = currNode;
		} else {
			this.insertNode(this.root, currNode);
		}
	}

	insertNode(node, newNode) {
		// 左侧
		if (newNode.val < node.val) {
			if (node.left === null) {
				node.left = newNode;
			}
			// 继续向下层左侧
			else {
				this.insertNode(node.left, newNode);
			}
		}
		// 右侧
		else if (newNode.val > node.val) {
			if (node.right === null) {
				node.right = newNode;
			}
			// 继续向下层右侧
			else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	hasChildren(node) {
		return node.left || node.right;
	}

	search(val) {
		let curr = this.root;
		while (curr) {
			if (val === curr.val) return curr;
			curr = val < curr.val ? curr.left : curr.right;
		}
		return null;
	}

	forEach(cb) {
		this.forEachNode(this.root, cb);
	}

	forEachNode(node, cb) {
		if (node) {
			this.forEachNode(node.right, cb);
			cb(node);
			this.forEachNode(node.left, cb);
		}
	}

	get min() {
		let curr = this.root;
		let min;
		while (curr) {
			min = curr.val;
			curr = curr.left;
		}

		return min;
	}

	get max() {
		let curr = this.root;
		let max;
		while (curr) {
			max = curr.val;
			curr = curr.right;
		}

		return max;
	}

	// 这是我最开始的想法， 这个方法虽然方便， 但是删除节点后， 加深了树的层级。
	remove2(val) {
		let curr = this.root,
			parent,
			dir;

		while (curr) {
			// 匹配成功
			if (curr.val === val) {
				if (parent && dir) {
					// 清空父节点
					parent[dir] = null;

					// 将删除节点的子分支， 依次插入(如果有)到父节点
					if (curr.right) this.insertNode(parent, curr.right);
					if (curr.left) this.insertNode(parent, curr.left);
				}
				// root 匹配成功
				else {
					// 优先将右节点设为 root
					if (curr.right) this.root = curr.right;

					if (curr.left) {
						if (this.root) {
							this.insertNode(this.root, curr.left);
						}
						// 此时仍无 root 节点， 设置左分支为 root
						else {
							this.root = curr.left;
						}
					}
				}
			} else {
				// 不匹配；
				// 选定方向， 继续向子节点寻找
				dir = val > curr.val ? "right" : "left";
				parent = curr;
				curr = curr[dir];
			}
		}
	}

	// 视频移除的方式
	remove(val) {
		this.root = this.removeNode(this.root, val);
	}

	removeNode(node, val) {
		if (node === null) return null;

		// 在当前节点左侧
		if (val < node.val) {
			// 替换后，返回更新后的节点
			node.left = this.removeNode(node.left, val);
			return node;
		}
		// 在当前节点右侧
		if (val > node.val) {
			// 替换后，返回更新后的节点
			node.right = this.removeNode(node.right, val);
			return node;
		}

		// 成功匹配到当前节点
		const { left, right } = node;
		// 左右都无子节点
		// 直接将当前节点替换为 null
		if (left === null && right === null) return null;

		// 左右仅有一个不为空, 用不为空的节点替换当前节点
		if (left === null || right === null) return left || right;
		// 左右分支都不为空
		// 用右侧最小的值替换当前节点的值，然后从右侧删除最小节点
		else {
			const minNode = this.getMinNode(node.right);

			node.val = minNode.val;
			node.right = this.removeNode(node.right, minNode.val);

			return node;
		}
	}

	getMinNode(node) {
		while (node && node.left) {
			node = node.left;
		}
		return node;
	}

	log() {
		let level = 1,
			logs = [],
			{ levelVals, children } = this.getNextLevel([this.root], level);

		logs.push(levelVals);

		while (true) {
			level++;

			let result = this.getNextLevel(children, level);

			logs.push(result.levelVals);
			children = result.children;

			if (children.filter((el) => el).length === 0) break;
		}

		this.print(logs);
	}

	getNextLevel(branches, level) {
		let levelVals = [],
			children = [];

		for (let i = 0; i < branches.length; i++) {
			if (branches[i] === null) {
				levelVals.push("~");
				children.push(null);
				children.push(null);
			} else {
				let { val, left, right } = branches[i];

				levelVals.push(val);
				children.push(left);
				children.push(right);
			}
		}

		return { levelVals, children };
	}

	// genPreSpace(level, mark = " ") {
	// 	let space = "";

	// 	for (let i = 1; i <= level; i++) {
	// 		space += this.genSpace(i, mark);
	// 	}
	// 	return space;
	// }

	genSpace(count, unit = " ") {
		let space = "";

		for (let i = 0; i < count; i++) {
			space += unit;
		}
		return space;
	}

	genPreSpace(level, i) {
		let layer = level - i;

		let spaceCount = 0;

		for (let j = 1; j <= layer; j++) {
			spaceCount += Math.pow(2, j);
		}

		return this.genSpace(spaceCount);
	}

	genBetweenSpace(level, i, unit) {
		let layer = level - i;
		return this.genSpace(Math.pow(2, layer), unit);
	}

	print(logs) {
		const level = logs.length;

		for (let i = 1; i <= logs.length; i++) {
			const currentLine = logs[i - 1];

			const preSpace = this.genPreSpace(level, i);
			const betweenSpace = this.genBetweenSpace(level, i, "  ");

			console.log(
				`${preSpace}${currentLine
					.join(",")
					.replace(/,/gi, betweenSpace)
					.replace(/\~/gi, "  ")}`
			);
		}
	}
}

// const tree = new Tree([12, 7, 9, 2, 18, 1, 3, 17, 6, 15, 10, 11, 14]);

// tree.log();

// console.log(tree.min, tree.max);
// console.log(tree.search(8));
// console.log(tree.remove2(3));
// console.log(tree.remove(2));
// console.log(tree.root);

// tree.forEach((el) => console.log(el.val));

module.exports = Tree;
