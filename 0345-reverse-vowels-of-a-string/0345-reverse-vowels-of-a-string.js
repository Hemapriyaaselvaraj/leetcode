/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vow = "AEIOUaeiou";
    let arr = s.split("");
    let vowels = [];
    for(let val of arr){
        if(vow.includes(val)){
            vowels.push(val);
        }
    }
    let res = "";
    vowels.reverse();
    for(let val of arr){
        if(vow.includes(val)){
            for(let vowe of vowels){
                res+=vowels.shift();
                break;
            }
        }else{
          res+=val;
        }
    }
    return res;
};