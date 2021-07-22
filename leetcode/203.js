function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	if (head === null) return null;

	let result;

	if (head.val === val) {
		result = removeElements(head.next, val);
	} else {
		result = new ListNode(head.val);
		result.next = removeElements(head.next, val);
	}
	return result;
};
