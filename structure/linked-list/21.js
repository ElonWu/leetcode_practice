/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const ListNode = require('./base');

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;

  let res = new ListNode(),
    useL1;

  if (!list1) useL1 = false;
  else if (!list2) useL1 = true;
  else useL1 = list1.val <= list2.val;

  res.val = useL1 ? list1.val : list2.val;

  res.next = useL1
    ? mergeTwoLists(list1.next, list2)
    : mergeTwoLists(list1, list2.next);

  res.console();

  return res;
};

const list1 = new ListNode([1, 2, 4]);
const list2 = new ListNode([2, 3, 5]);

mergeTwoLists(list1, list2);
