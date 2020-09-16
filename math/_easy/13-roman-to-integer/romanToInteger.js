// ver 1 
const romanToInt_1 = s => {
  const dict = {
    I: next => (1 < next ? -1 : 1),
    V: next => (5 < next ? -5 : 5),
    X: next => (10 < next ? -10 : 10),
    L: next => (50 < next ? -50 : 50),
    C: next => (100 < next ? -100 : 100),
    D: next => (500 < next ? -500 : 500),
    M: next => (1000 < next ? -1000 : 1000),
    undefined: () => 0,
  };
  return s.split('').reduce((a, c, i) => a + dict[c](dict[s[i + 1]]()), 0);
};

// ver 2
const sym = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

var romanToInt_2 = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += sym[s[i]] * (sym[s[i]] < sym[s[i + 1]] ? -1 : 1)
  }

  return result;
};

console.log(romanToInt_1('MCMXCIV'));