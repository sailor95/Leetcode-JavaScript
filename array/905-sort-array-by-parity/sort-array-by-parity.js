/**
 * @param {number[]} A
 * @return {number[]}
 */
// 72 ms, faster than 89.45%
const sortArrayByParity_1 = A => {
    let ans = [],
        popItem;

    while (A.length) {
        popItem = A.pop();
        if (popItem % 2 === 0) {
            ans.unshift(popItem);
        } else {
            ans.push(popItem);
        }
    }

    return ans;
};

const sortArrayByParity_2 = A => {
    return A.reduce((prev, curr) => {
        if (curr % 2 === 0) {
            return [curr, ...prev];
        } else {
            return [...prev, curr];
        }
    }, []);
}

const sortArrayByParity_3 = A => {
    let ans = [];
    A.forEach(x => {
        if (x % 2 === 0) {
            ans.unshift(x);
        } else {
            ans.push(x);
        }
    });
    return ans;
}

const sortArrayByParity_4 = A => A.sort((a, b) => (a % 2) - (b % 2));

tester1 = [3, 1, 2, 4];
console.log(sortArrayByParity_2(tester1));