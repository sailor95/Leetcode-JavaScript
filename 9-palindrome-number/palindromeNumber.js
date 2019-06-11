// v1, 228ms
var isPalindrom_v1 = function (x) {
  return x == x.toString().split('').reverse().join('') ? true : false;
};

// v2, 240ms
var isPalindrom_v2 = function (x) {
  return x == x.toString().split('').reverse().join('');
};

// v3,
var isPalindrom_v3 = function (x) {
  let w = x,
    y = 0;

  while (w > 0) {
    let z = w % 10;

    y *= 10;
    y += z;

    w -= z;
    w /= 10;
  }

  return x === y;
};

console.log(isPalindrom_v2(121));