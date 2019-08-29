// Examples
// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Notes
// 1 <= A.length = A[0].length <= 20
// 0 <= A[i][j] <= 1

var input1 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];

// 68 ms 50.52%
const flip_1 = a => {
  let output = [];

  while (a.length) {
    let innerArr = a.shift();
    let subArr = [];
    while (innerArr.length) {
      if (innerArr.pop()) {
        subArr.push('0');
      } else {
        subArr.push('1');
      }
    }
    output.push(subArr);
  }

  return output;
};

console.log(flip_1(input1));