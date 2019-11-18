/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal_1 = root => {
    const ans = [];
    if (!root) return ans;

    const traverse = node => {
        if (node.left) {
            traverse(node.left);
        }
        ans.push(node.val);
        if (node.right) {
            traverse(node.right);
        }
    }

    traverse(root);
    return ans;
};

const inorderTraversal_2 = (node, ans = []) => {
    if (node) {
        inorderTraversal_2(node.left, ans);
        ans.push(node.val);
        inorderTraversal_2(node.right, ans);
    }
    return ans;
}

const inorderTraversal_3 = root => {
    if (!node) return [];

    let result = [],
        stack = [],
        node = root;

    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            result.push(node.val);
            node = node.right;
        }
    }

    return result;
}