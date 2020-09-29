/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// 596 ms, faster than 82.81%
const postOrder_recur = root => {
    if (!root) {
        return [];
    }
    const ans = [];
    const traverse = node => {
        while (node.children.length) {
            traverse(node.children.shift());
        }
        ans.push(node.val);
    };
    traverse(root);
    return ans;
};

// 612 ms, faster than 50.31%
const postOrder_iter = root => {
    if (!root) {
        return [];
    }
    const
        ans = [],
        stack = [];
    let
        node,
        children;

    stack.push(root);

    while (stack.length) {
        node = stack.pop();
        ans.unshift(node.val);
        if (node.children) {
            children = node.children;
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i]);
            }
        }
    }
    return ans;
};


const tester = {
    "$id": "1",
    "children": [
        {
            "$id": "2",
            "children": [
                {
                    "$id": "5",
                    "children": [],
                    "val": 5
                },
                {
                    "$id": "6",
                    "children": [],
                    "val": 6
                }
            ],
            "val": 3
        },
        {
            "$id": "3",
            "children": [],
            "val": 2
        },
        {
            "$id": "4",
            "children": [],
            "val": 4
        }
    ],
    "val": 1
};

const tester_1 = {
    "$id": "1",
    "children": [
        {
            "$id": "2",
            "children": [
                {
                    "$id": "3",
                    "children": [],
                    "val": 5
                },
                {
                    "$id": "4",
                    "children": [],
                    "val": 0
                }
            ],
            "val": 10
        },
        {
            "$id": "5",
            "children": [
                {
                    "$id": "6",
                    "children": [],
                    "val": 6
                }
            ],
            "val": 3
        }
    ],
    "val": 1
};

const tester_2 = {
    "$id": "1",
    "children": [{
        "$id": "2",
        "children": [{
            "$id": "3",
            "children": [],
            "val": 5
        }, {
            "$id": "4",
            "children": [],
            "val": 0
        }],
        "val": 10
    }, {
        "$id": "5",
        "children": [{
            "$id": "6",
            "children": [],
            "val": 6
        }],
        "val": 3
    }],
    "val": 1
};


// console.log(postOrder_recur(tester));
console.log(postOrder_iter(tester_2));