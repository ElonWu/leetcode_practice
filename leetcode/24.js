/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const ListNode = require('./base');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head?.next) return head;

  let res = head.next,
    curr = head,
    prev;

  while (curr?.next) {
    if (prev) prev.next = curr.next;

    let temp = curr.next.next;

    curr.next.next = curr;
    curr.next = temp;

    prev = curr;
    curr = temp;
  }

  return res;
};

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

const list = new ListNode([1, 2, 3, 4, 5, 6]);

swapPairs(list).console();
