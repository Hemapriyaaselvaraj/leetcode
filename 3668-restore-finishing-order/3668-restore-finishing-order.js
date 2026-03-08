/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let res = [];
    for(let num of order){
        if(friends.includes(num)){
            res.push(num);
        }
    }
    return res;
};