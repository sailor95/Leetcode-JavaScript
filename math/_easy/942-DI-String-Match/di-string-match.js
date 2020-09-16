/**
 * @param {string} S
 * @return {number[]}
 */
// pattern:
// IDID => 0 4 1 3 2
//           D   D
// starts with 'I', 2 'D', 2 upper ones
//
// IDI => 0 3 1 2
//          D 
// starts with 'I', 1 'D', 1 upper ones
//
// IDDI => 0 4 3 1 2
//           D D
// starts with 'I', 2 'D', 2 upper ones
//
// DID => 3 0 2 1
//        D   D
// starts with 'D', 2 'D', 2 upper ones
//
// DDD =>  3 2 1 0
//         D D D
// starts with 'D', 3 'D', 3 upper ones

// 80 ms, faster than 76.08%
var diStringMatch_1 = function (S) {
    let upperStart = S.length;
    let lowerStart = 0;
    let ans = [];

    // Produce ans
    S.split('').forEach(c => {
        if (c === 'I') {
            ans.push(lowerStart);
            lowerStart++;
        } else {
            ans.push(upperStart);
            upperStart--;
        }
    });

    // Fill for last element
    if (S[S.length - 1] === 'D') {
        ans.push(lowerStart);
    } else {
        ans.push(upperStart);
    }
    console.log(ans);
    return ans;
};

var diStringMatch_2 = function (S) {
    let upperStart = S.length;
    let lowerStart = 0;
    let ans = [];

    // Produce ans
    S.forEach(c => {
        if (c === 'I') {
            ans.push(lowerStart);
            lowerStart++;
        } else {
            ans.push(upperStart);
            upperStart--;
        }
    });

    // Fill for last element
    ans.push(lowerStart);
    console.log(ans);
    return ans;
};

diStringMatch_1('III');