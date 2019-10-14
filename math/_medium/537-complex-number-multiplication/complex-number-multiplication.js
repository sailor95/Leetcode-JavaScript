/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 44 ms, faster than 99.19%
const complexNumberMultiply = (a, b) => {
    let p1 = [], p2 = [];
    p1[0] = a.split('+')[0];
    p1[1] = a.split('+')[1].split('i')[0];
    p2[0] = b.split('+')[0];
    p2[1] = b.split('+')[1].split('i')[0];
    return `${p1[0] * p2[0] - p1[1] * p2[1]}+${p1[0] * p2[1] + p1[1] * p2[0]}i`;
};

const complexNumberMultiply_1 = (a, b) => {
    let p1 = [], p2 = [], temp;
    temp = a.split('+');
    p1[0] = temp[0];
    p1[1] = temp[1].split('i')[0];
    temp = b.split('+');
    p2[0] = temp[0];
    p2[1] = temp[1].split('i')[0];
    return `${p1[0] * p2[0] - p1[1] * p2[1]}+${p1[0] * p2[1] + p1[1] * p2[0]}i`;
};

const complexNumberMultiply_2 = (a, b) =>
    `${a.split('+')[0] * b.split('+')[0] - a.split('+')[1].split('i')[0] * b.split('+')[1].split('i')[0]}+${a.split('+')[0] * b.split('+')[1].split('i')[0] + a.split('+')[1].split('i')[0] * b.split('+')[0]}i`;


const tester1 = "1+1i";
const tester2 = "1+-1i";
const tester3 = "2+0i";

console.log(complexNumberMultiply_2(tester2, tester2));