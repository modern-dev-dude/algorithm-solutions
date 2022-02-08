/**
 * Time O(n)
 * Space O(3n)
 * Not in place 
 */
var reverseWords = function(s) {
    let wordToReverse =[];
    let resArr =new Array();
    for(let i =0; i < s.length; i++){
         if(s[i] === ' '){
             resArr.unshift(...wordToReverse ,' ');
             wordToReverse = [];
             continue;
            }else if(i === s.length -  1){
                wordToReverse.push(s[i]);
                resArr.unshift(...wordToReverse, ' ');
                wordToReverse = [];
                continue;

             } else{
                wordToReverse.push(s[i]);
            }
    }
    for(let i =0; i < s.length; i++){
        s[i] = resArr[i];
    }
};

/**
 * in-place
 * Time O(n)
 * Space O(1)
 * 
 */
 var reverseWordsInPlace = function(s) {
    s.join('').split(' ').reverse().join(' ').split('').forEach((item, idx) => s[idx] = item)
};