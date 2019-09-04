/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//92 ms
var rotate_1 = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    console.log(nums);
}

// 52 ms 99.60%
var rotate_2 = function (nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
    console.log(nums);
}

const tester = [1, 2, 3, 4, 5, 6, 7];

rotate_2(tester, 3);