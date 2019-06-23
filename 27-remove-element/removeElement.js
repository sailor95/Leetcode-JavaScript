// ver 1
var removeElement_1 = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--
        }
    }
    return nums.length;
};

// ver 2
var removeElement_2 = (nums, val) => {
    let newLen = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            continue;
        }
        nums[newLen] = nums[i];
        newLen++;
    }
    return newLen;
}

let testArr = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

console.log(removeElement_1(testArr, val));