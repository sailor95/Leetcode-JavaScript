// ver 1
var strStr_v1 = (haystack, needle) => {
  if (needle === '') return 0;

  let indexArr = [];
  let count = 0, needleLength = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(0)) {
      indexArr[count] = i;
      count++;
    }
  }

  for (let i = 0; i < indexArr.length; i++) {
    if (haystack.slice(indexArr[i], indexArr[i] + needleLength) === needle) {
      return indexArr[i];
    }
  }

  return -1;
}

// ver 2
var strStr_v2 = (haystack, needle) => {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
}

let hay = "hello";
let need = "ll";

console.log(strStr_v1(hay, need));