// ver 1
var longestCommonPrefix_1 = function (strs) {
  if (strs.length === 0) return '';

  // First scan: find shortest length
  let minLength = strs[0].length;
  for (const str of strs) {
    if (str.length < minLength) {
      minLength = str.length;
    }
  }

  // Second scan: find common chars until a different one
  for (let i = 0; i < minLength; i++) {
    for (const str of strs) {
      console.log(strs[0][i]);
      if (str[i] !== strs[0][i]) {
        return str.substr(0, i);
      }
    }
  }
  return strs[0].substr(0, minLength);

};

// ver 2
let longestCommonPrefix_2 = function (inRay) {
  //Error handling - handle empty arrays 
  if (inRay.length === 0) {
    return "";
  }

  let sortedInRay = inRay.concat().sort();        //copy inRay to a new array (concat) then sort it (sort)
  console.log(`sorted: ${sortedInRay}`);
  let ray1 = sortedInRay[0];                      //first subarray index starts at sortedInRay's start (its first string)
  let ray2 = sortedInRay[sortedInRay.length - 1];   //second subarray index starts at sortedInRay's second element (its second string)
  console.log(`1: ${ray1}, 2: ${ray2}`);
  let a = 0;                                      //loop counter

  //LOOP: while the loop counter is less than ray1's legnth and the character at position a is the same for ray1 and ray2
  while (a < ray1.length && ray1.charAt(a) === ray2.charAt(a)) {
    a++;
  }
  return ray1.substring(0, a); //return the substring from ray1's start to loop counter in common
}

const tester = ["flower", "flow", "flight"];
console.log(longestCommonPrefix_2(tester));
