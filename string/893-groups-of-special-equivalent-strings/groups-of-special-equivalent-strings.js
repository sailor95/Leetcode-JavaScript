/**
 * @param {string[]} A
 * @return {number}
 */
// 92 ms, faster than 26.85% 
const numSpecialEquivGroups = A => {
    const set = new Set();
    const innerLength = A[0].length;
    for (let i = 0; i < A.length; i++) {
        let group_1 = [], group_2 = [];
        let indexer = A[i];
        for (let j = 0; j < innerLength; j++) {
            if (j % 2 === 0) {
                group_1.push(indexer[j]);
            } else {
                group_2.push(indexer[j]);
            }
        }
        group_1.sort();
        group_2.sort();
        A[i] = group_1.join('') + group_2.join('');
    }

    A.forEach(a => set.add(a));

    return set.size;
};

// 72 ms, faster than 81.88%
const numSpecialEquivGroups_1 = A => {
    const set = new Set();
    const innerLength = A[0].length;
    for (let i = 0; i < A.length; i++) {
        let group_1 = [], group_2 = [];
        let indexer = A[i];
        for (let j = 0; j < innerLength; j++) {
            if (j % 2 === 0) {
                group_1.push(indexer[j]);
            } else {
                group_2.push(indexer[j]);
            }
        }
        group_1.sort();
        group_2.sort();
        set.add(group_1.join('') + group_2.join(''));
    }
    return set.size;
};

const numSpecialEquivGroups_2 = A => {
    const set = new Set();
    for (let i in A) {
        let group_1 = [], group_2 = [];
        let indexer = A[i];
        for (let j in A[i]) {
            if (j % 2 === 0) {
                group_1.push(indexer[j]);
            } else {
                group_2.push(indexer[j]);
            }
        }
        group_1.sort();
        group_2.sort();
        set.add(group_1.join('') + group_2.join(''));
    }
    return set.size;
};

const tester_0 = ["abc", "acb", "bac", "bca", "cab", "cba"];
const tester_1 = ["aa", "bb", "ab", "ba"];
const tester_2 = ["abcd", "cdab", "adcb", "cbad"];

console.log(numSpecialEquivGroups(tester_2));