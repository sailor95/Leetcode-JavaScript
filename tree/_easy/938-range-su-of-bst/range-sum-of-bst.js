// 160 ms, faster than 80.01
const rangeSumBST_1 = (root, L, R) => {
    // check if value is in the given range
    const isInBetween = val => val >= L && val <= R;
    // sum the value if it's in the range
    const add = (val, sum) => isInBetween(val) ? sum += val : sum;
    // traverse through the nodes and sum the values in range
    const preOrder = (root, sum) => {
        if (!root) return sum;
        return add(root.val, sum) + preOrder(root.left, sum) + preOrder(root.right, sum);
    }
    return preOrder(root, 0);
}