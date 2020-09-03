/**
 * @param {string[]} words
 * @return {number}
 */

const codeList = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

// 56 ms, faster than 82.61 %
var uniqueMorseRepresentations_1 = function (words) {
  let mapArr = [];

  words.forEach(word => {
    let codeVal = "";
    word.split('').forEach(char => {
      codeVal += codeList[char.charCodeAt(0) - 97];
    });

    if (!mapArr.includes(codeVal)) mapArr.push(codeVal);
  });

  return mapArr.length;
};

const MORSE = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--.."
};
// 52 ms, faster than 94.16%
var uniqueMorseRepresentations_2 = function (words) {
  const transformations = {};

  for (let word of words) {
    const transformation = word.split("").reduce((prev, curr) => {
      return prev + MORSE[curr];
    }, "");

    if (!transformations[transformation]) transformations[transformation] = 0;
    transformations[transformation]++;
  }

  return Object.keys(transformations).length;
};

const uniqueMorseRepresentations_3 = words => {
  return new Set(words.map(word => word.split('').map(letter => MORSE[letter]).join(''))).size;
}

const words = ["gin", "zen", "gig", "msg"];
uniqueMorseRepresentations_1(words);