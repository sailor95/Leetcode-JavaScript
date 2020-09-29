/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//  Recursive
var sumRootToLeafRecursive = ({val, left, right}, curr) =>
  !left && !right
    ? parseInt(curr + val, 2)
    : (left ? sumRootToLeafRecursive(left, curr + val) : 0) +
      (right ? sumRootToLeafRecursive(right, curr + val) : 0);

// Loop
var sumRootToLeafLoop = function (root) {
  let ans = 0;
  const stack = [[root, '']];

  while (stack.length) {
    let [{val, left, right}, acc] = stack.pop();
    acc += val;

    if (left) {
      stack.push([left, acc]);
    }

    if (right) {
      stack.push([right, acc]);
    }

    if (!left && !right) {
      ans += parseInt(acc, 2);
    }
  }

  return ans;
};
