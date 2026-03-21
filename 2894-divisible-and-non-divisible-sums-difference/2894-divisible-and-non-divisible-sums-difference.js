/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let notDivi = 0;
    let divi = 0;
    for(let i=1;i<=n;i++){
        if(i%m === 0){
            divi+=i;
        }else{
            notDivi+=i;
        }
    }
    return notDivi-divi;
};