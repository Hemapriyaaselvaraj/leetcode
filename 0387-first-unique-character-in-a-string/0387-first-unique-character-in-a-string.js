/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = {};
    for(let letter of s){
        if(freq[letter]){
            freq[letter]++;
        }else{
            freq[letter] = 1;
        }
    }
    for(let val of s){
        if(freq[val] == 1){
            return s.indexOf(val)
        }
    }
    return -1;
};