/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

var constructMaximumBinaryTree = function (nums) {

    const helper = (arr, leftIndex, rightIndex) => {
        if (leftIndex > rightIndex) {
            return null;
        }

        let maxIndex = arr.findIndex(num => num === Math.max(...arr.slice(leftIndex, rightIndex + 1)));
        const newNode = new TreeNode(arr[maxIndex]);
        newNode.left = helper(arr, leftIndex, maxIndex - 1);
        newNode.right = helper(arr, maxIndex + 1, rightIndex);

        return newNode;
    }

    return helper(nums, 0, nums.length - 1);
};

// 84 ms, faster than 93.62%
const constructMaximumBinaryTree_1 = (nums, l = 0, r = nums.length - 1) => {
    if (l > r) return null;

    let maxIndex = l;

    for (let i = l; i <= r; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }

    const node = new TreeNode(nums[maxIndex]);

    node.left = constructMaximumBinaryTree(nums, l, maxIndex - 1);
    node.right = constructMaximumBinaryTree(nums, maxIndex + 1, r);

    return node;
}

const tester1 = [3, 2, 1, 6, 0, 5];

console.log(constructMaximumBinaryTree(tester1));