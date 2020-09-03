/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */

// 56 ms, faster than 73.39%
const customSortString_1 = (S, T) => {
    const order = {};
    let ans = '';

    S.split('').forEach(s => order[s] = 0);

    T.split('').forEach(t => {
        if (order.hasOwnProperty(t)) {
            order[t] += 1;
        } else {
            order[t] = 1;
        }
    });

    Object.keys(order).forEach(key => {
        for (let i = 0; i < order[key]; i++) {
            ans += key;
        }
    });

    return ans;
};

const customSortString_2 = (S, T) =>
    T.split("").sort((a, b) => (S.indexOf(a) || 0) - (S.indexOf(b) || 0)).join("");

const S = "cbag";
const T = "gababccasdcd";

console.log(customSortString_1(S, T));
console.log(customSortString_2(S, T));