/**
 * @param {number[]} T
 * @return {number[]}
 */
// 144 ms, faster than 78.49%
const dailyTemperatures = T => {
    const ans = new Array(T.length).fill(0);
    const stack = [];
    let poppedIndex;
    T.forEach((curr, i) => {
        if (stack.length && T[stack[stack.length - 1]] < curr) {
            while (T[stack[stack.length - 1]] < curr) {
                poppedIndex = stack.pop();
                ans[poppedIndex] = i - poppedIndex;
            }
        }
        stack.push(i);
    });
    return ans;
};

const tester1 = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(tester1));