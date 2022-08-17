// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  return addTwoNumbersHelper(l1, l2, 0);
};

var addTwoNumbersHelper = function (l1, l2, carry) {
  if (l1 != undefined && l2 != undefined) {
    const sum = l1.val + l2.val + carry;
    if (sum >= 10) {
      return new ListNode(sum % 10, addTwoNumbersHelper(l1.next, l2.next, 1));
    }
    return new ListNode(sum, addTwoNumbersHelper(l1.next, l2.next, 0));
  }
  if (l1 != undefined) {
    if (carry == 1 && l1.val == 9) {
      return new ListNode(0, addTwoNumbersHelper(l1.next, l2, 1));
    }
    return new ListNode(l1.val + carry, addTwoNumbersHelper(l1.next, l2, 0));
  }
  if (l2 != undefined) {
    if (carry == 1 && l2.val == 9) {
      return new ListNode(0, addTwoNumbersHelper(l1, l2.next, 1));
    }
    return new ListNode(l2.val + carry, addTwoNumbersHelper(l1, l2.next, 0));
  }
  if (carry == 1) {
    return new ListNode(1, null);
  }
  return null;
};

function main() {
  const l1 = new ListNode();
  l1.val = 2;
  l1.next = new ListNode();
  l1.next.val = 4;
  l1.next.next = new ListNode();
  l1.next.next.val = 3;

  const l2 = new ListNode();
  l2.val = 5;
  l2.next = new ListNode();
  l2.next.val = 6;
  l2.next.next = new ListNode();
  l2.next.next.val = 4;
  console.log(addTwoNumbers(l1, l2));
  console.log("expected [7,0,8]");
}

main();
