/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 48 ms, faster than 94.99%
const isUnivalTree_recur = root => {
    if (!root) return false;
    const val = root.val;
    let ans = true;
    const traverse = node => {
        if (node.val !== val) ans = false;
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return ans;
};

const isUnivalTree_recur2 = root => {
    let bLeftTrue = !root.left || (root.left.val == root.val && isUnivalTree(root.left));

    let bRightTrue = !root.right || (root.right.val == root.val && isUnivalTree(root.right));

    return bLeftTrue && bRightTrue
}

// 48 ms, faster than 94.99% 
const isUnivalTree_iter = root => {
    const queue = [root],
        rootVal = root.val;
    let node;
    while (queue.length) {
        node = queue.shift();
        if (node.val !== rootVal) return false;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return true;
}