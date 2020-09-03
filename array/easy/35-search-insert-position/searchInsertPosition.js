// ver 1: Failed
var searchInsert_v1 = function (nums, target) {
    if (nums[0] >= target)
        return 0;
    // check nums' middle number, if bigger than 
    let pointer = Math.floor(nums.length / 2);
    let counter = Math.floor(pointer / 2);
    while (counter !== 0) {
        if (nums[pointer] === target) {
            return pointer;
        } else if (nums[pointer] > target) {
            pointer = pointer - counter;
            counter = Math.floor(counter / 4);
        } else {
            pointer = pointer + counter;
            counter = Math.floor(counter / 4);
        }
    }
    if (nums[pointer] === target) return pointer;
    return nums[pointer] > target ? pointer : ++pointer;
};

// ver 2
var searchInsert_v2 = (nums, target) => {
    let index = nums.indexOf(target);

    if (index > -1) return index;
    if (nums[0] > target) return 0;
    if (nums[nums.length - 1] < target) return nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target && nums[i + 1] > target) {
            return i + 1;
        }
    }
}

// ver 3
var searchInsert_v3 = (nums, target) => {
    return nums.filter(x => x < target).length;
}

// ver 4
var searchInsert_v4 = (nums, target) => {
    // If the target is less then the very last item then insert it at that item index
    // because anything index less then that has already been confirmed to be less then the target.
    // Otherwise insert it at that item index + 1
    // because any index grater then that has already been confirmed to be greater then the target
    if (start > end) return start;

    const midPoint = Math.floor((start + end) / 2);

    // found target
    if (array[midPoint] === target) return midPoint;

    // search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}

let testerArr = [1, 3];
let testerTarget = 3;

console.log(searchInsert_v1(testerArr, testerTarget));