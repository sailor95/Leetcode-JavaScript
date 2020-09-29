/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// Runtime: 212 ms, faster than 68.83%
const findSmallestSetOfVertices = (n, edges) => {
  const values = new Set(Array(n).keys());
  edges.forEach(([from, to]) => values.delete(to));
  return [...values];
};

const edges = [
  [0, 1],
  [0, 2],
  [2, 5],
  [3, 4],
  [4, 2],
];
console.log(findSmallestSetOfVertices(6, edges));
