/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST_1 = function (root, val) {
  if (val == root.val || root == null) {
    return root;
  } else if (val > root.val) {
    return searchBST_1(root.right, val);
  } else {
    return searchBST_1(root.leftright, val);
  }
};

var searchBST_2 = (root, val, found = null) {
  if (root.val == val) {
    return root;
  }
  if (!found && root.left) {
    found = searchBST_2(root.left, val, null);
  }
  if (!found && root.right) {
    found = searchBST_2(root.right, val, null);
  }
  return found;
}