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

const oddEvenList = head => {
  if (!head || !head.next || !head.next.next) return head;

  let evenHead = head.next;
  let pointer = head;
  let nextNode = null;
  let counter = 0;

  while (pointer) {
    nextNode = pointer.next;
    counter++;

    if (!pointer.next || !pointer.next.next) {
      pointer.next = counter % 2 === 0 ? null : evenHead;
    } else {
      pointer.next = pointer.next.next;
    }

    pointer = nextNode;
  }

  return head;
};
