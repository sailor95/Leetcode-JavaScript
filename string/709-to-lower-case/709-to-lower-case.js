
const toLowerCase_1 = str => {
    return str.toLowerCase();
};

const toLowerCase_2 = str => {
    return str.split('').reduce((prev, cur) => {
        let code = cur.charCodeAt(0);
        if (64 < code && 91 > code) {
            return prev + String.fromCharCode(32 + code);
        }
        return prev + cur;
    }, '');
};

const toLowerCase_3 = str => {
    var res = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code >= 65 && code < 97) {
            code += 32;
        }
        res += String.fromCharCode(code)
    }
    return res;
}

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));