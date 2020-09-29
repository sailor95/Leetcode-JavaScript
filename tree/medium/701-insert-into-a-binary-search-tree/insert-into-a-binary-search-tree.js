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
// 104 ms, faster than 86.63%
const insertIntoBST = (root, val) => {
    let pointer = root;
    while (pointer) {
        if (val > pointer.val) {
            if (pointer.right) {
                pointer = pointer.right;
            } else {
                pointer.right = new TreeNode(val);
                return root;
            }
        } else {
            if (pointer.left) {
                pointer = pointer.left;
            } else {
                pointer.left = new TreeNode(val);
                return root;
            }
        }
    }
    return root;
};