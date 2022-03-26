const ListNode = require('./base');

// 链表中的 临界点 定义为一个 局部极大值点 或 局部极小值点 。

// 如果当前节点的值 严格大于 前一个节点和后一个节点，那么这个节点就是一个  局部极大值点 。

// 如果当前节点的值 严格小于 前一个节点和后一个节点，那么这个节点就是一个  局部极小值点 。

// 注意：节点只有在同时存在前一个节点和后一个节点的情况下，才能成为一个 局部极大值点 / 极小值点 。

// 给你一个链表 head ，返回一个长度为 2 的数组 [minDistance, maxDistance] ，其中 minDistance 是任意两个不同临界点之间的最小距离，maxDistance 是任意两个不同临界点之间的最大距离。如果临界点少于两个，则返回 [-1，-1] 。

// 提示：
// 链表中节点的数量在范围 [2, 105] 内
// 1 <= Node.val <= 105

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let index = 1,
    prev = head,
    mid = head?.next,
    next = head?.next?.next;

  let first, last, min, max;

  while (next) {
    if (
      (mid.val > prev.val && mid.val > next.val) ||
      (mid.val < prev.val && mid.val < next.val)
    ) {
      if (first) {
        max = index - first;
        min = min ? Math.min(min, index - last) : index - last;
      } else {
        first = index;
      }

      last = index;
    }

    console.log({ index, first, last, min, max });

    // 向后推进
    prev = mid;
    mid = next;
    next = next.next;
    index++;
  }

  return min && max ? [min, max] : [-1, -1];
};

// 示例 1：
// 输入：head = [3,1]
// 输出：[-1,-1]
// 解释：链表 [3,1] 中不存在临界点。

// 示例 2：
// 输入：head = [5,3,1,2,5,1,2]
// 输出：[1,3]
// 解释：存在三个临界点：
// - [5,3,1,2,5,1,2]：第三个节点是一个局部极小值点，因为 1 比 3 和 2 小。
// - [5,3,1,2,5,1,2]：第五个节点是一个局部极大值点，因为 5 比 2 和 1 大。
// - [5,3,1,2,5,1,2]：第六个节点是一个局部极小值点，因为 1 比 5 和 2 小。
// 第五个节点和第六个节点之间距离最小。minDistance = 6 - 5 = 1 。
// 第三个节点和第六个节点之间距离最大。maxDistance = 6 - 3 = 3 。

// 示例 3：
// 输入：head = [1,3,2,2,3,2,2,2,7]
// 输出：[3,3]
// 解释：存在两个临界点：
// - [1,3,2,2,3,2,2,2,7]：第二个节点是一个局部极大值点，因为 3 比 1 和 2 大。
// - [1,3,2,2,3,2,2,2,7]：第五个节点是一个局部极大值点，因为 3 比 2 和 2 大。
// 最小和最大距离都存在于第二个节点和第五个节点之间。
// 因此，minDistance 和 maxDistance 是 5 - 2 = 3 。
// 注意，最后一个节点不算一个局部极大值点，因为它之后就没有节点了。

// 示例 4：
// 输入：head = [2,3,3,2]
// 输出：[-1,-1]
// 解释：链表 [2,3,3,2] 中不存在临界点。
//

const head1 = new ListNode([3, 1]);
const head2 = new ListNode([5, 3, 1, 2, 5, 1, 2]);
const head3 = new ListNode([1, 3, 2, 2, 3, 2, 2, 2, 7]);
const head4 = new ListNode([2, 3, 3, 2]);
const head5 = new ListNode([6, 8, 4, 1, 9, 6, 6, 10, 6]); // [1,6]

// console.log(nodesBetweenCriticalPoints(head1));
// console.log(nodesBetweenCriticalPoints(head2));
// console.log(nodesBetweenCriticalPoints(head3));
// console.log(nodesBetweenCriticalPoints(head4));
console.log(nodesBetweenCriticalPoints(head5));
