class LinkListItem {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkList {
	constructor(vals) {
		// 非数组的构造参数， 转为数组
		vals = Array.isArray(vals) ? vals : [...arguments];

		this.length = vals.length;
		this.head = null;

		for (let i = vals.length - 1; i >= 0; i--) {
			this.head = new LinkListItem(vals[i], this.head);
		}
	}

	// console
	console() {
		let curr = this.head;
		let log = `length: ${this.length}; \n`;
		if (curr) {
			let result = `${curr.value}`;
			while (curr.next) {
				result += ` => ${curr.next.value}`;
				curr = curr.next;
			}
			log += result;
		}
		console.log(log);
	}

	// 尾部追加
	append(val) {
		let tail = this.head;

		while (tail.next) {
			tail = tail.next;
		}

		tail.next =
			val instanceof LinkListItem ? val : new LinkListItem(val, null);
		this.length += 1;
	}
	// 指定位置插入
	insert(index, val) {
		// 超过当前长度， 插入失败
		if (index > this.length) return;

		// 等于当前长度， 直接 append;
		if (index === this.length) return this.append(val);

		// 初始化当前 item
		let curr =
			val instanceof LinkListItem ? val : new LinkListItem(val, null);

		// 更换 head
		if (index === 0) {
			curr.next = this.head;
			this.head = curr;
		} else {
			// 中间任意位置插入
			let i = 1,
				prev = this.head;
			while (i < index) {
				prev = prev.next;
				i++;
			}
			curr.next = prev.next;
			prev.next = curr;
		}
		// 插入成功， 更新 length
		this.length += 1;
	}
	// 指定位置的 item
	getItemAt(index) {
		// 超出最高下标
		if (index < 0 || index > this.length - 1) return null;

		let i = 0,
			curr = this.head;

		while (i < index) {
			curr = curr.next;
			i++;
		}

		return curr;
	}

	// item 首个匹配的位置；
	indexOf(val) {
		let curr = this.head,
			i = 0;

		while (curr) {
			// curr 匹配成功；
			if (curr.value === val) return i;
			// 继续向后匹配
			curr = curr.next;
			i++;
		}
		// 未匹配到
		return -1;
	}

	// 剔除首个值匹配的 item
	remove(val) {
		this.removeAt(this.indexOf(val));
	}
	// 剔除指定位置的 item
	removeAt(index) {
		// 超出最高下标
		if (index < 0 || index > this.length - 1) return null;

		if (index === 0) {
			this.head = this.head.next;
		} else {
			let prev = this.getItemAt(index - 1);
			let curr = prev.next;

			prev.next = curr.next;

			// 删除项断开联系
			curr.next = null;
		}

		this.length -= 1;
	}
}

let linklist = new LinkList(["a", "b"]);

// console.log(linklist.head, linklist.length);

linklist.append("c");

linklist.insert(0, "d");

// linklist.remove("a");

// linklist.removeAt(1);

// console.log(0, linklist.getItemAt(0));
// console.log(1, linklist.getItemAt(1));
// console.log(5, linklist.getItemAt(5));

linklist.console();

console.log(linklist.indexOf("c"));

module.exports = LinkList;
