/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let highOdd = "";
    for(let i=num.length-1;i>=0;i--){
      if(num[i]%2 != 0){
        highOdd = num.substring(0,i+1);
        break;
       } 
    }
    return highOdd;
};