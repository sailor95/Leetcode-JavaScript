/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const pairs = {};

const encode = (longUrl) => {
  let randKey = "";

  do {
    randKey = Math.random().toString(32).slice(5); // 5 char random string
  } while (pairs[randKey]); // make sure no collisions

  pairs[randKey] = longUrl;

  return `http://tinyurl.com/${randKey}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = (shortUrl) => {
  const key = shortUrl.split("http://tinyurl.com/")[1];
  return pairs[key];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

const originalUrl = "https://leetcode.com/problems/design-tinyurl";
console.log(decode(encode(originalUrl)));
