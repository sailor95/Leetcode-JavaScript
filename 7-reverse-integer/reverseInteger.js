// v1: Pass, 80ms, 35.9MB
var reverse = function (x) {
  const ans = (parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x))
  return (ans < (Math.pow(2, 31) - 1) && ans > -Math.pow(2, 31)) ? ans : 0;
};

// v2: