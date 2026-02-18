/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let arr = s.split("");
    let count = 0;
    let matching = 0;
    for(let num of arr){
        if(num == "R"){
            count++;
        }else{
            count--;
        }

        if(count == 0){
            matching++;
        }
        
    }
        
    return matching;
};