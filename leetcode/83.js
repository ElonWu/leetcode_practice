function ListNode(val) {
	this.val = val;
	this.next = null;
}

function log(list) {
	let result = `${list.val}`;
	while (list.next) {
		result += `=>${list.next.val}`;
		list = list.next;
	}
	console.log(result);
}

var deleteDuplicates = function (head) {
	if (!head) return null;

	let result = head,
		duplicates = { [head.val]: true };

	while (head.next) {
		// 删除重复项
		if (duplicates[head.next.val]) {
			head.next = head.next.next;
		} else {
			duplicates[head.next.val] = true;

			head = head.next;
		}
	}
	return result;
};

var l1 = new ListNode(1);
l1.next = new ListNode(1);
l1.next.next = new ListNode(2);
l1.next.next.next = new ListNode(2);

log(deleteDuplicates(l1));
// deleteDuplicates(l1);
