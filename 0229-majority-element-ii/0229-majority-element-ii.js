/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    let res = Math.floor(n/3);
    let freq = {};
    for(let num of nums){
        if(freq[num]){
            freq[num] = freq[num]+1;
        }else{
            freq[num] = 1;
        }
    }

    let final = [];
    for(let num in freq){
        if(freq[num] > res){
            final.push(Number(num));
            // console.log(freq[value])
        }
    }
    return final;
};