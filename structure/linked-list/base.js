class ListNode {
  constructor(arr = [null]) {
    this.val = arr[0];
    this.next = arr.length === 1 ? null : new ListNode(arr.slice(1));
  }

  console() {
    let res = `${this.val}`,
      next = this.next;

    while (next) {
      res += ` -> ${next.val}`;
      next = next.next;
    }

    console.log(res);
  }
}

module.exports = ListNode;
