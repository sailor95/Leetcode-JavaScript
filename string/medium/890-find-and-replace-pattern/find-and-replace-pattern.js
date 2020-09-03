/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
// 60 ms, faster than 67.73% 
const findAndReplacePattern = (words, pattern) => {
    let dic, wordSize, comparator, counter, set, arr;
    const ans = [];
    const blankDic = {};
    const patternSize = new Set(pattern).size;

    pattern.split('').forEach(w => {
        blankDic[w] = '';
    });

    for (word of words) {
        set = new Set(word);
        wordSize = set.size;
        dic = JSON.parse(JSON.stringify(blankDic));
        if (word.length === pattern.length && patternSize === wordSize) {
            counter = 0;

            arr = [...set];

            Object.keys(dic).forEach(key => {
                dic[key] = arr[counter];
                counter++;
            });

            comparator = '';
            for (let i = 0; i < pattern.length; i++) {
                comparator += dic[pattern[i]];
            }
            if (comparator === word) ans.push(word);
        }
    }
    return ans;
};

// 52 ms, faster than 95.06%
const findAndReplacePattern_1 = (words, pattern) => {
    const p = [...pattern].map(el => pattern.indexOf(el)).join('');
    return words.filter(word => [...word].map(el => word.indexOf(el)).join('') === p);
}

const tester1 = ["abc", "deq", "mee", "aqq", "dkd", "ccc"];
const pattern1 = `abb`;

const tester2 = ["yzmyr", "fhufq", "lghlq", "oahot", "ueiuq"];
const pattern2 = "iusiq";

// console.log(findAndReplacePattern(tester1, pattern1));
console.log(findAndReplacePattern_1(tester2, pattern2));