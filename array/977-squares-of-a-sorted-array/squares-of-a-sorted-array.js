/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    const maxCollisions = A.length;
    let ans = [];
    A.forEach(a => {
        let hasCollision = true,
            offset = 0;
        while (hasCollision) {
            if (a >= 0 && ans[(a + 1) * maxCollisions - offset] === undefined) {
                ans[(a + 1) * maxCollisions - offset] = Math.pow(a, 2);
                hasCollision = false;
            } else if (a < 0 && ans[((-a) + 1) * maxCollisions - offset] === undefined) {
                ans[((-a) + 1) * maxCollisions - offset] = Math.pow(a, 2);
                hasCollision = false;
            } else if (a >= 0 && ans[(a + 1) * maxCollisions - offset] !== undefined) {
                offset++;
            } else if (a < 0 && ans[((-a) + 1) * maxCollisions - offset] !== undefined) {
                offset++;
            }
        }
    });
    ans = ans.filter(a => a !== undefined);
    return ans;
};

// 152 ms, faster than 23.79%
const sortedSquares_1 = A => {
    let sorted = A.sort((a, b) => Math.abs(a) - Math.abs(b));
    return sorted.map(s => Math.pow(s, 2));
}

// 140 ms, faster than 51.19%
const sortedSquares_2 = A => {
    return A.map(a => a * a).sort((a, b) => a - b);
}

// 96 ms, faster than 98.56%
const sortedSquares_3 = A => {
    let ans = [],
        head = 0,
        tail = A.length - 1;
    while (head <= tail) {
        if (A[head] ** 2 > A[tail] ** 2) ans.push(A[head++] ** 2);
        else ans.push(A[tail--] ** 2);
    }
    return ans.reverse();
}

// with no collision
const tester_1 = [-4, -1, 0, 3, 10];
// with collision
const tester_2 = [-7, -3, 2, 3, 11];
// with collision
const tester_3 = [-4, -3, 1, 3, 4];

const tester_4 =
    [-20, -19, -14, -12, -7, -5, 2, 2, 4, 6, 6, 7, 8, 9, 10, 12, 17, 17, 18, 18];

console.log(sortedSquares_3(tester_4));