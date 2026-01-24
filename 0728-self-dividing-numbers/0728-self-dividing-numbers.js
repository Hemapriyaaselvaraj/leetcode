/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let arr = [];
    for(let i=left;i<=right;i++){
            let isDividing = true;
        let num = i.toString().split("");
        for(let j=0;j<=num.length-1;j++){
            if(i % parseInt(num[j]) != 0){
             isDividing = false;
             break;
            }
        }
        if(isDividing){
            arr.push(i);
        }
    }
    return arr;
};