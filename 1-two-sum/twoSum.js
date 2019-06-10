const nums = [2, 7, 11, 15];
const target = 9;

// v1: 132ms
var twoSum_1 = function (nums, target) {
  let ans = [];
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) == target) {
        ans.push(i);
        ans.push(j);
        return ans;
      }
    }
  }
};

// v2: 48ms
var twoSum_2 = function (nums, target) {
  var dict = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in dict) {
      return [dict[target - nums[i]], i]
    } else {
      dict[nums[i]] = i;
    }
  }
};

// v3: 56ms
var twoSum_3 = function (nums, target) {
  const diffs = new Map();
  const j = nums.findIndex((a, i) => diffs.has(target - a) || diffs.set(a, i) && 0);
  return [diffs.get(target - nums[j]), j];
};

console.log(twoSum_1(nums, target));