/**
 * @param {number[][]} grid
 * @return {number}
 */

// [[2]] = 5
// [[1,2],[3,4]] = 17
// [[1,0],[0,2]] = 8
// [[1,1,1],[1,0,1],[1,1,1]] = 14

var projectionArea_1 = function (grid) {
    let xyArea = 0,
        xzArea = 0,
        yzArea = 0,
        xAxisLength = 0,
        xAxisMaxZArr = [];
    // x-y surface = how many dots
    grid.forEach(y => {
        xyArea += y.length;
    });
    // x-z surface = Sum(max of each x)
    // 1. find x-axis length, which is the longest side
    grid.forEach(y => {
        if (y.length > xAxisLength) xAxisLength = y.length;
    });
    // 2. traverse along x-axis and see all the max z
    grid.forEach(y => {
        for (let i = 0; i < xAxisLength; i++) {
            if (y[i] && xAxisMaxZArr[i] && y[i] > xAxisMaxZArr[i]) {
                xAxisMaxZArr[i] = y[i];
            } else if (y[i] === undefined) {
                break;
            } else if (y[i] && xAxisMaxZArr[i] === undefined) {
                xAxisMaxZArr[i] = y[i];
            }
        }
    });
    xAxisMaxZArr.forEach(z => {
        xzArea += z;
    })

    // y-z surface = Sum(max of each y)
    grid.forEach(y => {
        yzArea += Math.max(...y);
    });

    return xyArea + xzArea + yzArea;
};

// 56 ms, faster than 77.23%
var projectionArea_2 = function (grid) {
    let ans = 0,
        xAxisLength = grid[0].length,
        xAxisMaxZArr = [];
    // x-y surface = how many dots
    grid.forEach(y => {
        y.forEach(dot => {
            // if dot is '0' then no space
            if (dot) ans++;
        });
    });
    // x-z surface = Sum(max of each x)

    // traverse along x-axis and see all the max z
    grid.forEach(y => {
        for (let i = 0; i < xAxisLength; i++) {
            if (y[i] && xAxisMaxZArr[i] && y[i] > xAxisMaxZArr[i]) {
                xAxisMaxZArr[i] = y[i];
            } else if (y[i] && xAxisMaxZArr[i] === undefined) {
                xAxisMaxZArr[i] = y[i];
            }
        }
    });
    xAxisMaxZArr.forEach(z => {
        ans += z;
    })

    // y-z surface = Sum(max of each y)
    grid.forEach(y => {
        ans += Math.max(...y);
    });

    return ans;
};

// 44 ms, faster than 99.01%
const projectionArea_3 = grid => {
    let ans = 0,
        xAxisLength = grid[0].length,
        xAxisMaxZArr = [];
    grid.forEach(y => {
        ans += y.filter(key => key !== 0).length;
    });
    grid.forEach(y => {
        for (let i = 0; i < xAxisLength; i++) {
            if (y[i] && xAxisMaxZArr[i] && y[i] > xAxisMaxZArr[i]) {
                xAxisMaxZArr[i] = y[i];
            } else if (y[i] && xAxisMaxZArr[i] === undefined) {
                xAxisMaxZArr[i] = y[i];
            }
        }
    });
    xAxisMaxZArr.forEach(z => {
        ans += z;
    })
    grid.forEach(y => {
        ans += Math.max(...y);
    });
    return ans;
};

// 52 ms, faster than 90.10%
const projectionArea_4 = grid => {
    let ans = 0;
    ans += grid.reduce((acc, curr) => acc += curr.filter(num => num > 0).length, 0);
    ans += grid[0].reduce((acc, curr, i) => acc += (Math.max(...grid.map(arr => arr[i]))), 0);
    ans += grid.reduce((acc, curr) => acc += Math.max(...curr), 0);
    return ans;
}


const tester1 = [[2]];
const tester2 = [[1, 2], [3, 4]];
const tester3 = [[1, 0], [0, 2]];
const tester4 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const tester5 = [[2, 2, 2], [2, 1, 2], [2, 2, 2]];
const tester6 = [[1, 0], [0, 2]];

console.log(projectionArea_2(tester6));