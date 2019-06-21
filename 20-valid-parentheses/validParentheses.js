// ver 1
var isValid_v1 = function (s) {
  let stack = [];
  const mapping = { ')': '(', '}': '{', ']': '[' };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in mapping) {
      const curr = stack.pop();
      if (mapping[s[i]] !== curr) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
}

console.log(isValid_v1('{er}'));