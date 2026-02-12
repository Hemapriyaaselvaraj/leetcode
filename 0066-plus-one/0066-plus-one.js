/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join(''));   
    let inc = num + 1n;             
    let arr = inc.toString().split('').map(Number);  
    return arr;
};
