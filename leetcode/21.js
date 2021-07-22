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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function (l1, l2) {
// 	let head1 = l1,
// 		head2 = l2,
// 		tail,
// 		curr;

// 	let result;

// 	while (true) {
// 		if (head1 === null && head2 === null) return result || new Node(null);

// 		if (head1 === null || head2 === null) {
// 			if (tail) {
// 				tail.next = head1 || head2;
// 				return result;
// 			} else {
// 				return head1 || head2;
// 			}
// 		}

// 		if (head1.val <= head2.val) {
// 			curr = new ListNode(head1.val);
// 			head1 = head1.next;
// 		} else {
// 			curr = new ListNode(head2.val);
// 			head2 = head2.next;
// 		}

// 		if (!tail) {
// 			tail = curr;
// 			result = tail;
// 		} else {
// 			tail.next = curr;
// 			tail = tail.next;
// 		}
// 	}
// };

var mergeTwoLists = function (l1, l2) {
	if (l1 === null && l2 === null) return null;

	if (l1 === null || l2 === null) return l1 || l2;

	let val1 = l1.val,
		val2 = l2.val;

	// l1 大
	if (val1 > val2) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	}
	// l2 大
	if (val2 < val1) {
		l2.next = mergeTwoLists(l2.next, l1);
		return l2;
	}

	let result = new ListNode(val1);
	result.next = new ListNode(val2);
	result.next.next = mergeTwoLists(l1.next, l2.next);

	return result;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let merge = mergeTwoLists(l1, l2);

log(merge);
