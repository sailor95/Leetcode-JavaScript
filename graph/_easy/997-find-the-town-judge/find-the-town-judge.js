/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// 132 ms, faster than 16.79%
var findJudge = function (N, trust) {
    // fulfill 2 conditions
    // 1. If there's a Set that with length = N -1, and assume that's judge
    const set = new Set(trust.map(t => t[0]).sort((a, b) => a - b));
    if (set.size !== N - 1) return -1;
    let judge = -1;
    console.log(set);
    [...set].some((s, i) => {
        if (s - i !== 1) {
            judge = i + 1;
            return true;
        }
    });
    if (judge === -1) judge = N;
    console.log(judge);
    // 2. Check there will be (N - 1) elements with judge as second arg
    counter = 0;
    for (t of trust) {
        if (t[1] === judge) counter++;
    }
    if (counter === N - 1) return judge;
    return -1;
};

// 88 ms, faster than 96.18%
const findJudge_1 = (N, trust) => {
    const counts = new Array(N + 1).fill(0);
    for (let [i, j] of trust) {
        counts[i]--;
        counts[j]++;
    }
    for (let i = 1; i < N + 1; i++) {
        if (counts[i] === N - 1) return i;
    }
    return -1;
}

// Graph
var findJudge_graph = function (N, trust) {
    let graph = new Graph();
    for (let i = 1; i <= N; i++) {
        let node = new Node(i);
        graph.addNode(node);
    }

    trust.forEach(trust => {
        graph.addTrust(trust[0], trust[1]);
    });

    return graph.getJudge()

};

function Graph() {
    this.nodes = {};

    this.addNode = function (node) {
        if (!this.nodes[node.val]) this.nodes[node.val] = node;
    }

    this.addTrust = function (val1, val2) {
        if (!this.nodes[val1] || !this.nodes[val2]) return false;
        this.nodes[val1].trusts.push(val2);
    }

    this.getJudge = function () {
        let judge = null;
        let nodeKeys = Object.keys(this.nodes);
        nodeKeys.forEach(nodeKey => {
            let node = this.nodes[nodeKey];
            if (node.trusts.length == 0 && judge !== null) judge = -1;
            else if (node.trusts.length == 0) judge = node.val;
        })
        if (judge == null || judge == -1) return -1;

        nodeKeys.forEach(nodeKey => {
            let node = this.nodes[nodeKey];
            if (node.val !== judge && !node.trusts.includes(judge)) judge = -1;
        })
        return judge;
    }

}

function Node(val) {
    this.val = val;
    this.trusts = [];
}


// 3
tester_1 = {
    N: 4,
    trust: [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]
};

// 5
tester_2 = {
    N: 6,
    trust: [[1, 2], [6, 4], [3, 2], [2, 6], [4, 5], [6, 1], [1, 4], [1, 5], [2, 3], [2, 1], [4, 3], [4, 2], [2, 5], [4, 1], [2, 4], [6, 5], [3, 5]]
};

// 1
tester_3 = {
    N: 4,
    trust: [[3, 2], [4, 1], [3, 1], [2, 1], [2, 3], [4, 3], [4, 2], [3, 4]]
};

console.log(findJudge_1(tester_1.N, tester_1.trust));
