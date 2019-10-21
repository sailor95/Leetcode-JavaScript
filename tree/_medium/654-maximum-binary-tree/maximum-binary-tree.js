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

const tester1 = [3, 2, 1, 6, 0, 5];

console.log(constructMaximumBinaryTree(tester1));