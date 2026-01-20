/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sort = [...score].sort((a,b) => b-a);
    let mapping = {};
    for(let i=0;i<score.length;i++){
        if(i == 0){
         mapping[sort[i]]="Gold Medal";
        }else if(i == 1){
         mapping[sort[i]]="Silver Medal";
        }else if(i == 2){
         mapping[sort[i]]="Bronze Medal";
        }else{
            mapping[sort[i]] = (i+1).toString();
        }
    }

return score.map(s => mapping[s]);

};