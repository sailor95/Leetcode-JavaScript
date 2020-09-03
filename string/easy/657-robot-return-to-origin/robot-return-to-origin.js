/**
 * @param {string} moves
 * @return {boolean}
 */

// 64 ms, faster than 66.49%
var judgeCircle_1 = function (moves) {
    let RL = 0,
        UD = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'R') {
            RL++;
        } else if (moves[i] === 'L') {
            RL--;
        } else if (moves[i] === 'U') {
            UD++
        } else {
            UD--;
        }
    }
    return (RL === 0) && (UD === 0);
};

const judgeCircle_2 = moves =>
    moves.split('').reduce((sum, cur) => [sum[0] - (cur === 'R') + (cur === 'L'), sum[1] - (cur === 'U') + (cur === 'D')], [0, 0]).join('') === '00';


tester1 = 'UD';
tester2 = 'LL';

console.log(judgeCircle_2(tester1));