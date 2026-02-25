/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let rev = s.substring(0,k).split("").reverse().join("");
    let res = rev + s.substring(k);
    return res;
};