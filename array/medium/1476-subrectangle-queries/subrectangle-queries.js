// 96 ms, faster than 96.56%
class SubrectangleQueries {
  constructor(rectangle) {
    this.rect = rectangle;
  }

  updateSubrectangle(row1, col1, row2, col2, newValue) {
    for (let row = row1; row <= row2; row++) {
      for (let col = col1; col <= col2; col++) {
        this.rect[row][col] = newValue;
      }
    }
    return null;
  }

  getValue(row, col) {
    return this.rect[row][col];
  }
}

const tester1 = new SubrectangleQueries([
  [1, 2, 1],
  [4, 3, 4],
  [3, 2, 1],
  [1, 1, 1],
]);
console.log(tester1.getValue(0, 2));
tester1.updateSubrectangle(0, 0, 3, 2, 5);
console.log(tester1.getValue(0, 2));
console.log(tester1.getValue(3, 1));
tester1.updateSubrectangle(3, 0, 3, 2, 10);
console.log(tester1.getValue(3, 1));
console.log(tester1.getValue(0, 2));

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
