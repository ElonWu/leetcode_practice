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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let res = head,
    target = head,
    targetPrev = null,
    i = 0;

  while (head) {
    if (++i > n) {
      targetPrev = target;
      target = target.next;
    }

    head = head.next;
  }

  if (!targetPrev) return res.next;

  targetPrev.next = target.next;

  return res;
};

const head = new ListNode([1, 2, 3, 4, 5]);

removeNthFromEnd(head, 2).console();
