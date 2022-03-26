const ListNode = require('./base');

// 给你一个链表的头节点 head 和一个特定值 x ，
// 请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 你应当 保留 两个分区中每个节点的初始相对位置。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head?.next) return head;

  let swaped = true,
    res = head;

  while (swaped) {
    const swapRes = swap(res, x);

    res = swapRes.res;
    swaped = swapRes.swaped;
  }

  return res;
};

const swap = (head, x) => {
  let swaped = false,
    res = head,
    curr = head,
    prev;

  while (curr.next) {
    let next = curr.next,
      nextnext = next?.next;

    if (shouldSwap(curr, next, x)) {
      swaped = true;

      // next 成为头节点
      if (curr === res) res = next;

      // 交换位置
      if (prev) prev.next = next;
      prev = next;
      next.next = curr;
      curr.next = nextnext;
    } else {
      prev = curr;
      curr = next;
    }
  }

  return {
    res,
    swaped,
  };
};

const shouldSwap = (curr, next, x) => {
  return curr.val > next.val && curr.val >= x && next.val < x;
};

// 示例 1：
// 输入：head = [1,4,3,2,5,2], x = 3
// 输出：[1,2,2,4,3,5]

// 示例 2：
// 输入：head = [2,1], x = 2
// 输出：[1,2]

const head1 = new ListNode([1, 4, 3, 2, 5, 2]);
partition(head1, 3).console();

const head2 = new ListNode([2, 1]);
partition(head2, 2).console();

const head3 = new ListNode([3, 1, 2]);
partition(head3, 3).console();
