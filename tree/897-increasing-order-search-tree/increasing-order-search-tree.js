/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// 136 ms, faster than 73.43%
const increasingBST = root => {
  const newRoot = new TreeNode();
  let pointer = newRoot;
  let tempNode;

  const traverseInorder = node => {
    if (node.left) {
      traverseInorder(node.left);
    }
    if (!newRoot.val && newRoot.val !== 0) {
      newRoot.val = node.val;
    } else {
      tempNode = new TreeNode(node.val);
      pointer.right = tempNode;
      pointer = pointer.right;
    }
    if (node.right) {
      traverseInorder(node.right);
    }
  }

  traverseInorder(root);

  return newRoot;
};

const increasingBST_1 = root => {
  let dummy = new TreeNode();
  let pointer = dummy;

  const traverse = node => {
    if (!node) return;
    traverse(node.left);
    pointer.right = node;
    pointer = pointer.right;
    pointer.left = null;
    traverse(node.right);
  };

  traverse(root);
  return dummy.right;
};

const increasingBST_2 = (root, tail) => {
  if (root === null) return tail;
  let res = increasingBST_2(root.left, root);
  root.left = null;
  root.right = increasingBST_2(root.right, tail);
  return res;
};

const increasingBST_2 = root => {
  const stack = [];
  let head;
  let tail;
  while (root != null || stack.length) {
    if (root == null) {
      root = stack.pop();
      if (head == null) {
        head = root;
        tail = head;
      } else {
        tail.right = root;
        tail = tail.right;
        tail.left = null;
      }
      root = root.right;
    } else {
      stack.push(root);
      root = root.left;
    }
  }
  return head;
};