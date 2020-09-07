/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = (s, t) => {
  const mapS = new Map();
  const mapT = new Map();
  const setT = new Set();

  // prep for S map
  s.split('').forEach(char => {
    if (mapS.has(char)) {
      mapS.set(char, mapS.get(char) + 1);
    } else {
      mapS.set(char, 1);
    }
  });

  t.split('').forEach(char => {
    if (mapT.has(char)) {
      mapT.set(char, mapT.get(char) + 1);
    } else {
      mapT.set(char, 1);
    }
  });

  console.log(mapS);
  console.log(mapT);

  // traverse T
  // t.split('').forEach(char => {
  //   if (mapS.has(char)) {
  //     if (mapS.get(char) === 1) {
  //       mapS.delete(char);
  //     } else {
  //       mapS.set(char, mapS.get(char) - 1);
  //     }
  //   } else {
  //     setT.add(char);
  //     if (mapT.has(char)) {
  //       mapT.set(char, mapT.get(char) + 1);
  //     } else {
  //       mapT.set(char, 1);
  //     }
  //   }
  // });
  // console.log(mapS);
  // console.log(mapT);
  // console.log(setT);

  return Math.max(mapS.size, setT.size);
};

// const minSteps2 = (s, t) => {
//   const mapOfS = {};
//   const mapOfT = {};
//   let result = 0;

//   // prep for both maps
//   [...s].forEach(char => (mapOfS[char] = (mapOfS[char] ?? 0) + 1));
//   [...t].forEach(char => (mapOfT[char] = (mapOfT[char] ?? 0) + 1));

//   // traverse map S
//   Object.keys(mapOfS).forEach(key => {
//     result += !!mapOfT[key] ? Math.abs(mapOfT[key] - mapOfS[key]) : 1;
//   });

//   return result;
// };

console.log(
  minSteps('gctcxyuluxjuxnsvmomavutrrfb', 'qijrjrhqqjxjtprybrzpyfyqtzf')
);
