const ListNode = require('./base');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null,
    next = head;

  while (next) {
    let nextnext = next.next;

    // 从指向后转为指向前
    next.next = prev;

    // 处理下一节点
    prev = next;
    next = nextnext;
  }
  return prev;
};

const head = new ListNode([1, 2, 3, 1]);
reverseList(head);
