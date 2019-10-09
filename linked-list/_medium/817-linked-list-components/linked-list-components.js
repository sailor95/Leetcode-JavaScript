/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
// 72 ms, faster than 58.27%
const numComponents = (head, G) => {
    const set = new Set(G);
    const listToArr = [];
    let pointer = head;
    let ans = 0;
    let stack = [];
    while (pointer) {
        listToArr.push(pointer.val);
        pointer = pointer.next;
    }
    listToArr.forEach((curr) => {
        if (set.has(curr)) {
            stack.push(curr);
        } else {
            if (stack.length) {
                ans++;
                stack = [];
            }
        }
    });
    return (stack.length) ? ans + 1 : ans;
};

// 244 ms, faster than 18.71%
const numComponents_1 = (head, G) => {
    let pointer = head;
    const listToArr = [];
    while (pointer) {
        listToArr.push(pointer.val);
        pointer = pointer.next;
    }
    return listToArr.map((curr) => (G.includes(curr)) ? curr : 'x')
        .join('')
        .split('x')
        .filter(c => c ? c : null)
        .length;
}

// 64 ms, faster than 90%
const numComponents_2 = (head, G) => {
    const set = new Set(G);
    let pointer = head,
        stack = [],
        ans = 0;
    while (pointer) {
        if (set.has(pointer.val)) {
            stack.push(pointer.val);
        } else {
            if (stack.length) {
                ans++;
                stack = [];
            }
        }
        pointer = pointer.next;
    }
    return (stack.length) ? ans + 1 : ans;
};

console.log([0, 1, 2].join('').split('2').filter(c => c ? c : null));