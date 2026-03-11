/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq = {};
    for(let num of nums){
        if(freq[num]){
            freq[num]+=1;
        }else{
            freq[num]=1;
        }
    }
    for(let val in freq){
        if(freq[val] === 1){
            return Number(val);
        }
    }
};