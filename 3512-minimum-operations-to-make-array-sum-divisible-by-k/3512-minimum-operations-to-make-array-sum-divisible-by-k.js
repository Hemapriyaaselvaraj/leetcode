/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = 0;
    let count = 0;
    for(let num of nums){
        sum+=num;
    }
    let rem = sum%k;
    
      
    return rem;
};