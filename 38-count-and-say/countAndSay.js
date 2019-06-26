// ver 1 
var countAndSay_1 = (n) => {
  let stack = [1];
  let stack2 = [];
  let counter = 1;

  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      stack = stack2;
      stack2 = [];
    }
    for (let j = 0; j < stack.length; j++) {
      if (stack[j] && stack[j] === stack[j + 1]) {
        counter++;
      } else {
        stack2.push(counter);
        stack2.push(stack[j]);
        counter = 1;
      }
    }
  }
  return stack.join('');
}

// ver 2
var countAndSay_2 = n => {
  var str = '1';
  for (var i = 1; i < n; i++) {
    var strArray = str.split('');
    str = '';
    var count = 1;
    // Loop through current nth level line
    for (var j = 0; j < strArray.length; j++) {
      // Next digit is different
      if (strArray[j] !== strArray[j + 1]) {
        // Go to next non-matching digit
        str += count + strArray[j];
        count = 1;
      }
      else {
        count++;
      }
    }
  }
  return str;
}


console.log(countAndSay_1(5));

