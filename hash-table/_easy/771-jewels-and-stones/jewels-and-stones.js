/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 52 ms, faster than 91.45%
var numJewelsInStones = (J, S) => {
    let ans = 0;
    const set = new Set(J.split(''));
    S.split('').forEach(s => {
        if (set.has(s)) ans++;
    });
    return ans;
};

const numJewelsInStones = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
}

const tester_1 = {
    "J": "aA",
    "S": "aAAbbbb"
};

const tester_2 = {
    "J": "z",
    "S": "ZZ"
};

console.log(numJewelsInStones(tester_1.J, tester_1.S));
console.log(numJewelsInStones(tester_2.J, tester_2.S));