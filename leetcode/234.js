function ListNode(val) {
	this.val = val;
	this.next = null;

	this.append = (val) => {
		let node = new ListNode(val);
		this.next = node;
		return node;
	};

	this.log = () => {
		let result = "",
			head = this;
		while (head) {
			result += `${head.val} => `;
			head = head.next;
		}

		console.log(result.slice(0, result.length - 4));
	};
}

var isPalindrome = function (head) {
	let arr = [],
		evenEqual = 0,
		oddEqual = 0;

	while (head) {
		let val = head.val,
			len = arr.length;

		// 偶数型
		evenEqual = val === arr[len - 1 - evenEqual * 2] ? evenEqual + 1 : 0;

		// 奇数型
		oddEqual = val === arr[len - oddEqual * 2] ? oddEqual + 1 : 1;

		// 下一个
		arr.push(val);
		head = head.next;
	}

	return arr.length % 2
		? oddEqual === (arr.length + 1) / 2
		: evenEqual === arr.length / 2;
};

let head = new ListNode(1);

head.append(3).append(2).append(3).append(1);

head.log();

console.log(isPalindrome(head));

console.log("----------------------");

head.append(3).append(2).append(2).append(3).append(1);

head.log();

console.log(isPalindrome(head));
