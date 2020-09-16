/**
 * @param {number} n
 * @return {number}
 */
// Runtime: 104 ms, faster than 36.26%
const minOperations = n => {
  if (n === 1) return 0;
  let result = 0;

  for (let i = 0; i < Math.abs(n / 2); i++) {
    result += n - (i * 2 + 1);
  }

  return result;
};

// Runtime: 104 ms, faster than 36.26%
const minOperations2 = n => {
  let result = 0;

  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      result += i * 2 + 1;
    }
  } else {
    for (let i = 1; i < (n + 1) / 2; i++) {
      result += i * 2;
    }
  }

  return result;
};

// 92 ms, faster than 51.27%
const minOperations3 = n => {
  let bottom = n % 2 === 0 ? 1 : 2;
  let height = n % 2 === 0 ? n / 2 : (n - 1) / 2;

  return ((bottom + n - 1) * height) / 2;
};

// 76 ms, faster than 88.39%
const minOperations4 = n => (n % 2 === 0 ? (n * n) / 4 : (n * n - 1) / 4);

console.log(minOperations(6));
console.log(minOperations2(6));
console.log(minOperations3(6));
console.log(minOperations4(6));
