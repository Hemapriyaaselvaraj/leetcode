/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;
    let freq = {};
    for(let i=0;i<nums.length;i++){
        if(freq[nums[i]]){
          freq[nums[i]]++;
        }else{
            freq[nums[i]] = 1;
        }
    }
    for(let num in freq){
        if(freq[num] === 1){
            sum+= Number(num);
        }
    }
    return sum;
};