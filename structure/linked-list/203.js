const ListNode = require('./base');

// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 第一个非 val 作为头节点
  while (head?.val === val) {
    head = head.next;
  }
  const res = head;
  while (head?.next) {
    // 删除后续 val 节点
    if (head.next.val === val) head.next = head.next.next;
    else head = head.next;
  }
  return res;
};

// const head = new ListNode([1, 2, 3, 4, 5, 6, 5, 6, 4, 3, 2, 1]);
// removeElements(head, 6);

const head = new ListNode([1, 2, 2, 1]);
removeElements(head, 2);
