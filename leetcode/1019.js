var nextLargerNodes = function (head) {
	let pass = [],
		result,
		list;

	while (head) {
		for (let i = 0; i < pass.length; i++) {
			let { replace, val } = pass[i];
			if (replace === 0 && val < head.val) {
				pass[i].replace = head.val;
			}
		}

		pass.push({ val: head.val, replace: 0 });

		head = head.next;
	}

	result = list = new ListNode(pass[0].replace);

	for (let i = 1; i < pass.length; i++) {
		list.next = new ListNode(pass[i]);
	}

	return result;
};
