const ListNode = require('./base');

// 给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。

// 插入排序 算法的步骤:

// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。
// 下面是插入排序算法的一个图形示例。部分排序的列表(黑色)最初只包含列表中的第一个元素。每次迭代时，从输入数据中删除一个元素(红色)，并就地插入已排序的列表中。

// 对链表进行插入排序。

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
var insertionSortList = function (head) {
  if (!head?.next) return head;

  let start = head,
    end = head;

  while (end?.next) {
    start.console();
    end.console();
    console.log('-----------------');

    const insertRes = insert(start, end, end.next);

    start = insertRes.start;
    end = insertRes.end;
  }

  return start;
};

const insert = (start, end, curr) => {
  // 大于已有范围最大值，只需要更新 end
  if (curr.val >= end.val) return { start, end: curr };

  // 将 curr 独立出来
  end.next = curr.next;

  let prev = null;
  next = start;

  while (true) {
    // 插入到 prev 和 next 之间
    if (curr.val < next.val) {
      if (prev) prev.next = curr;
      curr.next = next;

      // 更新了 start
      if (next === start) start = curr;
      break;
    }

    // 移动下标
    prev = next;
    next = next.next;
  }

  return { start, end };
};

// 示例 1：
// 输入: head = [4,2,1,3]
// 输出: [1,2,3,4]

// 示例 2：
// 输入: head = [-1,5,3,4,0]
// 输出: [-1,0,3,4,5]
//

// 提示：
// 列表中的节点数在 [1, 5000]范围内
// -5000 <= Node.val <= 5000

// const head = new ListNode([4, 2, 1, 3, 5]);
const head = new ListNode([-1, 5, 3, 4, 0]);

insertionSortList(head).console();
