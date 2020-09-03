/**
 * @param {string} text
 * @return {number}
 */
// 72 ms, faster than 23.25%
const maxNumberOfBalloons = text => {
    let ans = text.length;
    const dic = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    };
    for (let char of text) {
        if (char in dic) {
            dic[char]++;
        }
    }
    Object.keys(dic).forEach(char => {
        if (dic[char] === 0) {
            ans = 0;
        }
        if ((char === 'l' || char === 'o') && (ans > Math.floor(dic[char] / 2))) {
            ans = Math.floor(dic[char] / 2);
        } else if (ans > dic[char]) {
            ans = dic[char];
        }
    })
    return ans;
};

// 60 ms, faster than 72.61%
const maxNumberOfBalloons_1 = text => {
    const dic = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    };
    for (let char of text) {
        if (char in dic) {
            dic[char]++;
        }
    }
    return Math.min(
        dic.b,
        dic.a,
        Math.floor(dic.l / 2),
        Math.floor(dic.o / 2),
        dic.n
    );
};

const tester1 = "nlaebolko";
const tester2 = "loonbalxballpoon";
const tester3 = "leetcode";
const tester4 = "balon";

console.log(maxNumberOfBalloons_1(tester1));
// console.log(maxNumberOfBalloons(tester2));
// console.log(maxNumberOfBalloons(tester3));