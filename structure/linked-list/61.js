const ListNode = require('./base');

// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head?.next || k === 0) return head;

  let len = 1,
    target = head;

  while (target.next) {
    target = target.next;
    len++;
  }

  if (k % len === 0) return head;

  let originEnd = target;
  originEnd.next = head;

  let targetOffset = len - 1 - (k % len),
    curr = head;

  for (let offset = 0; offset < targetOffset; offset++) {
    curr = curr.next;
  }

  let res = curr.next;
  curr.next = null;

  return res;
};

// 输入：head = [0,1,2], k = 4
// 输出：[2,0,1]

// 输入：head = [1,2,3,4,5], k = 2
// 输出：[4,5,1,2,3]

const head1 = new ListNode([1, 2, 3, 4, 5]);
rotateRight(head1, 2).console();

const head2 = new ListNode([1, 2]);
rotateRight(head2, 1).console();

const head3 = new ListNode([1, 2]);
rotateRight(head3, 2).console();

const head4 = new ListNode([0, 1, 2]);
rotateRight(head4, 4).console();
