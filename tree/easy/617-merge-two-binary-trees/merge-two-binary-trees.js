/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

const mergeTrees_1 = (t1, t2) => {
    if (t1 && t2) {
        const newNode = new TreeNode(t1.val + t2.val);
        newNode.left = mergeTrees_1(t1.left, t2.left);
        newNode.right = mergeTrees_1(t1.right, t2.right);
        return newNode;
    }
    return t1 || t2;
};