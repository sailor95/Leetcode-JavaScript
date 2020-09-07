/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
// 604 ms, faster than 41.61%
const maxDepth = root => {
    let layers = 0;
    const stack = {};

    if (root) {
        layers++;
        stack[layers + 1] = root.children;
    }

    while (stack[layers + 1] && stack[layers + 1].length) {
        layers++;
        for (let i = 0; i < stack[layers].length; i++) {
            if (stack[layers][i].children.length) {
                if (stack[layers + 1]) {
                    stack[layers + 1].push(...stack[layers][i].children);
                } else {
                    stack[layers + 1] = [...stack[layers][i].children];
                }
            }
        }
    }
    return layers;
};

const maxDepth_iter = root => {
    if (!root) return 0;
    let depth = 0;
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let queueSize = queue.length;

        for (let i = 0; i < queueSize; i++) {
            let node = queue.shift();
            queue.push(...node.children);
        }

        depth++;
    }

    return depth;
}

const maxDepth_rec1 = root => {
    if (root == null) {
        return 0;
    }

    let max = 0;
    for (let child of root.children) {
        max = Math.max(max, maxDepth(child));
    }

    return max + 1;
}

const maxDepth_rec2 = node => {
    if (!node) return 0;
    if (!node.children.length) return 1;
    return Math.max(...node.children.map(maxDepth)) + 1;
}

const tester1 = {
    "$id": "1",
    "children": [{
        "$id": "2",
        "children": [{
            "$id": "5",
            "children": [],
            "val": 5
        }, {
            "$id": "6",
            "children": [],
            "val": 6
        }],
        "val": 3
    }, {
        "$id": "3",
        "children": [],
        "val": 2
    }, {
        "$id": "4",
        "children": [],
        "val": 4
    }],
    "val": 1
};

tester2 = {
    "$id": "1",
    "children": [],
    "val": 44
};

console.log(maxDepth(tester1));
console.log(maxDepth(tester2));