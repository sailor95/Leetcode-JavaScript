// ver 1
var maxSubArray_1 = nums => {
    var prev = 0;
    var max = -Number.MAX_VALUE;

    for (var i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
};

let testArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray_1(testArr));