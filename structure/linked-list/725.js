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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  // 返回值
  let res = new Array(k).fill(null);

  // 转换为数组
  let list = [];
  while (head) {
    list.push(head);
    head = head.next;
  }

  // 计算分组
  const group = Math.floor(list.length / k);
  // 需要补充数量的组
  let extra = list.length % k;

  // 在 breakPoint 断开连接后将 head 加入数组
  let index = 0,
    breakPoint = 0;

  while (breakPoint < list.length) {
    if (breakPoint > 0) list[breakPoint - 1].next = null;
    res[index] = list[breakPoint];

    // 更新插入位置
    index++;

    // 更新 breakPoint
    if (extra > 0) {
      extra--;
      breakPoint += group + 1;
    } else {
      breakPoint += group;
    }
  }

  console.log(res);

  return res;
};

// 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。

// 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。

// 这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。

// 返回一个由上述 k 部分组成的数组。

//
// 示例 1：

// 输入：head = [1,2,3], k = 5
// 输出：[[1],[2],[3],[],[]]
// 解释：
// 第一个元素 output[0] 为 output[0].val = 1 ，output[0].next = null 。
// 最后一个元素 output[4] 为 null ，但它作为 ListNode 的字符串表示是 [] 。
// 示例 2：

// 输入：head = [1,2,3,4,5,6,7,8,9,10], k = 3
// 输出：[[1,2,3,4],[5,6,7],[8,9,10]]
// 解释：
// 输入被分成了几个连续的部分，并且每部分的长度相差不超过 1 。前面部分的长度大于等于后面部分的长度。
//

// 提示：

// 链表中节点的数目在范围 [0, 1000]
// 0 <= Node.val <= 1000
// 1 <= k <= 50

const head1 = new ListNode([1, 2, 3]),
  k1 = 5;

const head2 = new ListNode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  k2 = 3;

splitListToParts(head1, k1);
splitListToParts(head2, k2);
