// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。
// 返回 已排序的链表 。

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
var deleteDuplicates = function (head) {
  let res = head;

  while (head?.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  res.console();

  return res;
};

const head = new ListNode([1, 2, 2, 3, 3, 3, 4]);
deleteDuplicates(head);
