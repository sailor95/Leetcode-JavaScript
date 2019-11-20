/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
// 188 ms, faster than 83.06%
const kClosest = (points, K) => {
    const ans = [];
    const distances = points.map((p, i) => {
        return {
            val: Math.pow(p[0], 2) + Math.pow(p[1], 2),
            index: i
        };
    });
    distances.sort((a, b) => a.val - b.val);

    for (let i = 0; i < K; i++) {
        ans.push(points[distances[i].index]);
    }
    return ans;
};

// 176 ms, faster than 89.22%
const kClosest_1 = (points, K) =>
    points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])).slice(0, K);

const kClosest_2 = (points, K) =>
    points.sort(([a1, a2], [b1, b2]) => (a1 * a1 + a2 * a2) - (b1 * b1 + b2 * b2)).slice(0, K);

const tester1 = [[1, 3], [-2, 2]];
const tester2 = [[3, 3], [5, -1], [-2, 4]];

console.log(kClosest_1(tester1, 1));
console.log(kClosest_1(tester2, 2));


// TBD: Quick sort sol
//////////////////////
/*
var kClosest = function(points, K) {
    quickSelect(points, K, 0, points.length - 1)
    return points.slice(0, K)
};

function quickSelect(points, K, low, high) {
    if (low >= high) {
        return
    }

    const partPoint = partition(points, low, high)

    if (partPoint === K - 1) {
        return
    }
    if (partPoint < K - 1) {
        quickSelect(points, K, partPoint + 1, high)
    } else {
        quickSelect(points, K, low, partPoint - 1)
    }
}

function partition(points, low, high) {
    const pivot = points[high]
    let i = low
    let j = low
    while (i < high) {
        if (getDist(points[i]) < getDist(pivot)) {
            swap(points, i, j)
            j++
        }
        i++
    }
    swap(points, high, j)
    return j
}

function getDist(point) {
    return point[0] * point[0] + point[1] * point[1]
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
*/
//////////////////////