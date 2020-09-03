// ver 1
var plusOne_1 = digits => {
  let startPoint = 0;
  let reverse = digits.reverse();

  while (digits) {
    if (reverse[startPoint] !== 9) {
      if (reverse[startPoint] === undefined) {
        reverse[startPoint] = 1;
      } else {
        reverse[startPoint] = parseInt(reverse[startPoint]) + 1;
      }
      return reverse.reverse();
    } else {
      reverse[startPoint] = 0;
      startPoint++;
      continue;
    }
  }
};

// ver 2
var plusOne_2 = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
}

let input = [0];

console.log(plusOne_2(input));