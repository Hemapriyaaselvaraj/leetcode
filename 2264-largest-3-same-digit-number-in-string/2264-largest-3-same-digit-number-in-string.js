/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let threeDigit = [];

    for (let i = 0; i <= num.length - 3; i++) {
        if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
            threeDigit.push(num[i] + num[i + 1] + num[i + 2]);
        }
    }

    if (threeDigit.length === 0) return "";

    return threeDigit.sort().pop();
};
