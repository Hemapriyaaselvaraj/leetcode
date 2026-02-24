/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;
    let sum;
    let val;
    let arr = [];
    for(let i=1;i<=num;i++){
        arr.push(i);
    }
    for(let number of arr){
        sum = 0;
        value = number.toString().split("");
        for(let val of value){
           sum+=Number(val);
        }
        if(sum%2 === 0){
            count++;
        }
    }
    return count;
};