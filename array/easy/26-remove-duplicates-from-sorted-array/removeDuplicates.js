// ver 1
let removeDuplicates_v1 = nums => {
  if (!nums) return 0;
  let lastNum = "";
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === lastNum) {
      nums.splice(i, 1);
      i--;
    } else {
      lastNum = nums[i];
    }
  }
  return nums.length;
}

// ver 2
let removeDuplicates_v2 = nums => {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[j - 1]) {
      i++;
    } else {
      nums[j - i] = nums[j];
    }
  }

  return nums.length - i;
}

// ver 3
var removeDuplicates_v3 = function (nums) {
  var i = 0;
  nums.forEach(function (elem) {
    if (elem !== nums[i]) {
      nums[++i] = elem;
    }
  });
  return nums.length && i + 1;
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates_v3(arr));