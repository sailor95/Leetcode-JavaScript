const testAddress = "1.1.1.1"

// 48 ms, faster than 89.11%
const defangIPaddr_1 = address => address.split('.').join('[.]');

// 56 ms, faster than 43.30%
const defangIPaddr_2 = address => address.replace(/\./g, "[.]");

console.log(defangIPaddr_1(testAddress));