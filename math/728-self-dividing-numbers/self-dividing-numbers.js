/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

// 52 ms, faster than 96.06%
const selfDividingNumbers_1 = (left, right) => {
    let counter = left;
    let ans = [];
    let flag = false;
    let str;

    while (counter <= right) {
        str = counter.toString();
        for (let i = 0; i < str.length; i++) {
            if (counter % str[i] !== 0) {
                flag = true;
            }
        }
        if (!flag) {
            ans.push(counter);
        } else {
            flag = false;
        }
        counter++;
    }
    return ans;
};

selfDividingNumbers_1(1, 22);