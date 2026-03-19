/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let res = [];
    for(let num of nums){
        let arr = num.toString().split("");
        let sum = 0;
        for(let val of arr){
            sum+=Number(val);
        }
         res.push(sum);

    }
    return Math.min(...res);
};