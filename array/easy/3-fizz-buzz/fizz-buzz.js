let fizzBuzz = function (n) {
  let result = [];

  let mappings = {
    3: 'Fizz',
    5: 'Buzz',
  };

  for (let i = 1; i <= n; i++) {
    let str = '';

    for (let key in mappings) {
      if (i % parseInt(key, 10) === 0) {
        str += mappings[key];
      }
    }

    if (!str) {
      str += i;
    }

    result.push(str);
  }

  return result;
};
