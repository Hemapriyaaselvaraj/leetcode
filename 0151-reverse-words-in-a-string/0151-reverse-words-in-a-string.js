/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let temp = s.trim()
    let arr = temp.split(/\s+/);
    let n = arr.length;
    for(let i=0;i<n/2;i++){
     temp = arr[i];
     arr[i] = arr[n-i-1];
     arr[n-i-1] = temp;
    }
    return arr.join(" ")
};