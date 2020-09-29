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
// 592 ms, faster than 87.71%
var preOrder_recursive = function (root) {
  if (!root) {
    return [];
  }
  const ans = [];
  const traverse = node => {
    ans.push(node.val);
    while (node.children.length) {
      traverse(node.children.shift());
    }
    return;
  }
  traverse(root);
  return ans;
};

// 600 ms, faster than 71.46%
const preOrder_iterative = root => {
  if (!root) return [];
  const
    ans = [],
    stack = [];
  let
    node,
    children;

  stack.push(root);
  while (stack.length) {
    node = stack.pop();
    ans.push(node.val);
    children = node.children;
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }
  return ans;
}

const tester_1 =
{
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

console.log(preOrder_iterative(tester_1));