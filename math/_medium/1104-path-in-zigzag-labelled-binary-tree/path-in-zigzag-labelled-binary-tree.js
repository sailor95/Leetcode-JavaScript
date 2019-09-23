/**
 * @param {number} label
 * @return {number[]}
 */

const findParent = (level, order) =>
    Math.pow(2, level - 2) + (Math.ceil(order / 2) - 1);

const findOrder = (level, current) =>
    Math.pow(2, level) - current;
// 44 ms, faster than 98.15%
// Memory Usage: 33.9 MB, less than 100.00%
var pathInZigZagTree = function (label) {
    const ans = [label];
    if (label === 1) return ans;
    let level = 1;
    while (true) {
        if (label > Math.pow(2, level)) {
            level++;
        } else if (label === Math.pow(2, level)) {
            level++;
            break;
        } else {
            break;
        }
    }
    let order = findOrder(level, label);
    let parent = findParent(level, order);
    while (true) {
        if (parent !== 1) {
            ans.unshift(parent);
            level--;
            order = findOrder(level, parent);
            parent = findParent(level, order);
        } else {
            ans.unshift(1);
            return ans;
        }
    }
};

console.log(pathInZigZagTree(15));