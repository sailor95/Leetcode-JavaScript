// ver 1, time exceed
var lengthOfLastWord_v1 = s => {
  let counter = 0;
  let arr = s.split('');
  while (arr) {
    if (arr.pop() !== ' ') {
      counter++;
      continue;
    }
    return counter;
  }
  return 0;
}

// ver 2, time exceed
var lengthOfLastWord_v2 = s => {
  if (!s) return 0;
  let arr = s.split(' ');
  let peek;
  while (arr) {
    peek = arr.pop();
    if (peek !== '') {
      console.log(peek);
      return peek.length;
    }
  }
  return 0;
}

// ver 3
var lengthOfLastWord_v3 = s => {
  let arr = s.trim().split("").reverse();
  let i = 0, len = arr.length;
  while (arr[i] != ' ' && i < len) {
    i++;
  }
  return i;
}

// ver 4
var lengthOfLastWord_v4 = s => s.trim().split(' ').pop().length;

// ver 5
var lengthOfLastWord_v5 = s => s.trim().split(' ').reverse().shift().length;

let testString = "b   a    ";

lengthOfLastWord_v5(testString);