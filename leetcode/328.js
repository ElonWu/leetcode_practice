function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var oddEvenList = function (head) {
	let even,
		evenTail,
		tail = head,
		result = tail;

	while (true) {
		if (!evenTail) {
			evenTail = new ListNode(tail.next.val);
			even = evenTail;
		} else {
			evenTail.next = new ListNode(tail.next.val);
			evenTail = evenTail.next;
		}

		// log(even);

		if (tail.next.next === null) {
			tail.next = even;
			return result;
		} else {
			tail.next = tail.next.next;
			tail = tail.next;

			if (tail.next === null) {
				tail.next = even;
				return result;
			}
		}
	}
};

const source = [1, 2, 3, 4, 5, 6, 7, 8];

let tail = new ListNode(source[0]);
let head = tail;

for (let i = 1; i < source.length; i++) {
	tail.next = new ListNode(source[i]);
	tail = tail.next;
}

log(oddEvenList(head));

function log(head) {
	let tail = head;

	while (tail) {
		console.log(`${tail.val} => `);

		tail = tail.next;
	}

	console.log("-------------");
}
