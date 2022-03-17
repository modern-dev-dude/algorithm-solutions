/**
 * Problems and solutions from Leetcode
 * Notes made for study purposes
 * Some of the solutions are mine
 */
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // Space O(N)
    // Time O(N) 
    let inputAsArr = s.split(' ');
    let res=''
    for(let i =0; i < inputAsArr.length; i++){
        res += inputAsArr[i].split('').reverse().join("");
        if( i !== inputAsArr.length -1 ){
           res += ' ';
       }
    }
    return res;
};

