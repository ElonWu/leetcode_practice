const ListNode = require('./base');

// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

// L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/**
 * 递归思路
 */
// var reorderList = function (head) {
//   if (head.next) head.next = reverse(head.next);
//   return head;
// };

// const reverse = (head) => {
//   let prev = null;

//   while (head) {
//     const next = head.next;

//     head.next = prev;

//     prev = head;
//     head = next;
//   }

//   return reorderList(prev);
// };

/**
 * 列表思路
 */

var reorderList = function (head) {
  // 转为数组
  let inserts = [],
    curr = head;
  while (curr) {
    inserts.unshift(curr);
    curr = curr.next;
  }

  // 计算插入个数
  const insertCount = Math.ceil(inserts.length / 2) - 1;

  if (insertCount > 0) {
    let prev = head,
      next = head.next,
      index = 0;

    while (index < insertCount) {
      // 插入
      prev.next = inserts[index];
      inserts[index].next = next;

      // 断开环
      inserts[index + 1].next = null;

      // 移动
      prev = next;
      next = next?.next;
      index++;
    }
  }
  return head;
};

// 示例 1：

// 输入：head = [1,2,3,4]
// 输出：[1,4,2,3]
// 示例 2：

// 输入：head = [1,2,3,4,5]
// 输出：[1,5,2,4,3]
//

// 提示：

// 链表的长度范围为 [1, 5 * 104]
// 1 <= node.val <= 1000

const head = new ListNode(new Array(5 * 104).fill(0).map((_, i) => i + 1));
// const head = new ListNode([1, 2, 3, 4, 5]);

reorderList(head).console();
