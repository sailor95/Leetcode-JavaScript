/**
 * @param {string} s
 * @return {string}
 */
// 84 ms, faster than 28.74%
const reverseWords_1 = s =>
    s.split(' ').map(w => w.split('').reverse().join('')).join(' ');

// 60 ms, faster than 99.43% 
const reverseWords_2 = s =>
    s.split('').reverse().join('').split(' ').reverse().join(' ');

const tester_1 = "Let's take LeetCode contest";

console.log(reverseWords_2(tester_1));