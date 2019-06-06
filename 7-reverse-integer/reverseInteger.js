// v1: Pass, 80ms, 35.9MB
var reverse_1 = function (x) {
  const ans = (parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x))
  return (ans < (Math.pow(2, 31) - 1) && ans > -Math.pow(2, 31)) ? ans : 0;
};

// v2: Pass, 96ms, 35.6MB
var reverse_2 = function (x) {
  let result = 0;
  let y = x * Math.sign(x);

  while (y > 0) {
    result = result * 10 + y % 10;
    y = Math.floor(y / 10);
  }
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) return 0;
  return result * Math.sign(x);
}

// v3: 
var reverse_3 = function (x) {
  let result = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  return (result >= -0x80000000 && result <= 0x7fffffff) ? result : 0;
}