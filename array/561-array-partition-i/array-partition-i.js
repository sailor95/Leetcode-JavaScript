/**
 * @param {number[]} nums
 * @return {number}
 */
// 148 ms, faster than 8.26%
const arrayPairSum = nums =>
    nums
        .sort((a, b) => a - b)
        .reduce((sum, n, i) => (i % 2 === 0) ? sum += n : sum, 0);

// 104 ms, faster than 94.69%
const arrayPairSum_1 = nums => {
    let sum = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
}


const tester = [1, 4, 3, 2];

console.log(arrayPairSum_1(tester));