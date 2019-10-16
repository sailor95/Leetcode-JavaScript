/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 40 ms, faster than 100.00%
const uniqueOccurrences = arr => {
    const obj = {};
    let ans = true;
    arr.forEach(a => {
        if (obj[a] === undefined) {
            obj[a] = 1;
        } else {
            obj[a] += 1;
        }
    });
    Object.values(obj).sort((a, b) => {
        if (a !== b) {
            return a - b;
        } else {
            ans = false
            return a - b;
        }
    });
    return ans;
};

const uniqueOccurrences_1 = arr => {
    let occurTime = [...new Set(arr)].map(type => arr.filter(a => a === type).length);
    return (new Set(occurTime).size) === occurTime.length;
}

// 56 ms, faster than 69.52%
const uniqueOccurrences_2 = arr => {
    const obj = {};
    const set = new Set();
    arr.forEach(a => {
        if (obj[a] === undefined) {
            obj[a] = 1;
        } else {
            obj[a] += 1;
        }
    });
    for (let val of Object.values(obj)) {
        if (set.has(val)) {
            return false;
        }
        set.add(val);
    }
    return true;
};

const arr1 = [1, 2, 2, 1, 1, 3];
const arr2 = [1, 2];
const arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];

console.log(uniqueOccurrences_2(arr2));