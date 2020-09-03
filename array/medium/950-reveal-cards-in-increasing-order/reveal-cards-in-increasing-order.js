/**
 * @param {number[]} deck
 * @return {number[]}
 */
// 104 ms, faster than 8.02%
var deckRevealedIncreasing_1 = function (deck) {
    const sortedDeck = deck.sort((a, b) => a - b);
    let ans = [];
    let popCard;
    while (sortedDeck.length) {
        popCard = sortedDeck.pop();
        ans = [popCard, ...ans];
        ans = [ans[ans.length - 1], ...ans];
        ans.pop();
    }
    ans = [...ans, ans[0]];
    ans.shift();
    return ans;
};

// 52 ms, faster than 100.00%
// 35.5 MB, less than 100.00%
const deckRevealedIncreasing_2 = deck => {
    deck.sort((a, b) => a - b);
    const ans = [];
    while (deck.length) {
        ans.unshift(deck.pop());
        ans.unshift(ans.pop());
    }
    ans.push(ans.shift());
    return ans;
};

const tester1 = [17, 13, 11, 2, 3, 5, 7];
const output1 = [2, 13, 3, 11, 5, 17, 7];

console.log(deckRevealedIncreasing_3(tester1).toString() == output1.toString());