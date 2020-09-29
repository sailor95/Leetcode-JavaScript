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

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// iterate ////////////////////////////////////////////////////////////////////

// 56 ms, faster than 79.91%
var reverseList_iter_1 = function (head) {
    let prevNode, nextNode, next2Node;

    if (head === null) {
        return null;
    } else {
        prevNode = head;
    }

    if (head.next === null) {
        return head;
    } else {
        nextNode = head.next;
    }

    if (nextNode.next === null) {
        prevNode.next = null;
        nextNode.next = prevNode;
        return nextNode;
    } else {
        next2Node = nextNode.next;
    }

    prevNode.next = null;
    while (next2Node) {
        nextNode.next = prevNode;
        prevNode = nextNode;
        nextNode = next2Node;
        next2Node = nextNode.next;
    }
    nextNode.next = prevNode;
    return nextNode;
};

// 56 ms, faster than 79.91%
var reverseList_inter_2 = head => {
    var tmp = null;
    var newHead = null;

    while (head !== null) {
        tmp = head;
        head = head.next;
        tmp.next = newHead;
        newHead = tmp;
    }

    return newHead;
}

var reverseList_iter_3 = head => {
    let [prev, current] = [null, head]
    while (current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

// recursive ////////////////////////////////////////////////////////////////////
const helper = (prev, node) => {
    const { next } = node;
    node.next = prev;

    if (next === null) {
        return node;
    }
    else {
        return helper(node, next);
    }
}
var reverseList_recur_1 = function (head) {
    return head === null ? head : helper(null, head);
};

var reverseList_recur_2 = head => {
    function f(pre, node) {
        if (!node) return pre
        let temp = node.next
        node.next = pre
        return f(node, temp)
    }
    return f(null, head)
}