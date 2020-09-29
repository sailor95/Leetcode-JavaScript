/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// Draft
var nextLargerNodes = function (head) {
    let current = head,
        pointer = head,
        // current_index = 0,
        // pointer_index = 0,
        ans = [];

    if (current.next === null) {
        return [0];
    }

    while (current.next !== null) {
        pointer = pointer.next;
        // pointer_index++;
        if (pointer.val > current.val) {
            ans.push(pointer.val);
            current = current.next;
            pointer = current;
            // current_index++;
            // pointer_index = current_index;
        } else if (pointer.next === null) {
            ans.push(0);
            current = current.next;
            pointer = current;
        }
    }
    // Last item always 0
    ans.push(0);

    return ans;
};

// 1756 ms, faster than 27.02%
var nextLargerNodes_1 = function (head) {
    let current = head,
        pointer = head,
        ans = [];

    while (current.next) {
        pointer = pointer.next;
        if (pointer.val > current.val) {
            ans.push(pointer.val);
            current = current.next;
            pointer = current;
        } else if (pointer.next === null) {
            ans.push(0);
            current = current.next;
            pointer = current;
        }
    }
    ans.push(0);

    return ans;
}

// 148 ms, faster than 92.74%
const nextLargerNodes_2 = head => {
    var stack = [];
    var result = [];
    var current = head;
    var i = 0;
    while (current) {
        if (stack.length) {
            while (stack.length && current.val > stack[stack.length - 1].val) {
                result[stack.pop()['index']] = current.val;
            }
        }
        stack.push({
            'index': i,
            'val': current.val
        });
        i++;
        current = current.next;
    }
    stack.forEach(function (element) {
        result[element.index] = 0;
    })
    return result;
}