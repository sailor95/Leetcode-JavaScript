const fizzBuzz1 = n => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let result = '';
    if (i % parseInt(3, 10) === 0) result += 'Fizz';
    if (i % parseInt(5, 10) === 0) result += 'Buzz';

    if (result.length) {
      result.push(result);
    } else {
      result.push(i);
    }
  }

  return result;
};

let fizzBuzz = function (n) {
  const result = [];

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
