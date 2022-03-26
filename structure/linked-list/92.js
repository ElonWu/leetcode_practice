const ListNode = require('./base');

// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head?.next || left === right) return head;

  // 记录值
  let headInReverse = false,
    firstPrev = null,
    first;
  // 下标
  let index = 1,
    curr = head,
    prev = null;

  while (index <= right) {
    let next = curr.next;

    // 右边界
    if (index === right) {
      first.next = next;
      curr.next = prev;

      if (firstPrev) firstPrev.next = curr;

      return headInReverse ? curr : head;
    }

    // 左边界
    if (index === left) {
      first = curr;

      if (curr === head) {
        headInReverse = true;
      } else {
        firstPrev = prev;
      }
    }

    // 在中间地带
    else if (index > left) {
      curr.next = prev;
    }

    // 向后推进
    index++;
    prev = curr;
    curr = next;
  }
};

// 示例 1：
// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

// 示例 2：
// 输入：head = [5], left = 1, right = 1
// 输出：[5]

// const head1 = new ListNode([1, 2, 3, 4, 5]);
// const head2 = new ListNode([5]);
const head3 = new ListNode([3, 5]);

// reverseBetween(head1, 2, 4).console();
// reverseBetween(head1, 1, 3).console();
// reverseBetween(head2, 1, 1).console();
reverseBetween(head3, 1, 2).console();
