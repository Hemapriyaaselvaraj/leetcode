/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [];
    let dup;
    for(let i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
                dup = nums[i];
                res.push(dup);
                break;
            }
        }
    }
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            res.push(i);
        }
    }
    return res;
};