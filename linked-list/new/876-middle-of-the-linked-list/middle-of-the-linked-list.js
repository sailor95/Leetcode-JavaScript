/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 52 ms, faster than 68.13%
const middleNode_1 = head => {
    let counter = 0;
    let pointer = head;
    let pointerArr = [];

    while (pointer) {
        pointerArr[counter] = pointer;
        pointer = pointer.next;
        counter++;
    }

    return pointerArr[Math.ceil((counter - 1) / 2)];
}