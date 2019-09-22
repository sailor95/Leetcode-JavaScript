// https://leetcode.com/problems/design-tinyurl 
// and it returns a short URL such as 
// http://tinyurl.com/4e9iAk.

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const map = new Map();

var encode = function (longUrl) {
    if (!longUrl) return "";
    const salt = Math.random().toString(32).substring(2);
    map.set(salt, longUrl);

    console.log(`http://tinyurl.com/${salt}`);
    return `http://tinyurl.com/${salt}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    const UriArr = shortUrl.split('http://tinyurl.com/');
    console.log(map.get(UriArr[1]));
    return map.get(UriArr[1]);
};

decode(encode(`https://leetcode.com/problems/design-tinyurl `));



/**
 * Your functions will be called as such:
 * decode(encode(url));
 */