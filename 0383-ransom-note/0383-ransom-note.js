/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     let obj = {};
     for(let val of magazine){
        if(obj[val]){
            obj[val]++;
        }else{
            obj[val] = 1;
        }
     }

     for(let val of ransomNote){
        if(!obj[val]  || obj[val]<0){
            return false;
        }else{
            obj[val]--;
        }
     }
    
    return true;
};