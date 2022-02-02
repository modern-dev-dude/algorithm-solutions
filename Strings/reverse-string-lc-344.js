/**
 * Problems and solutions from Leetcode
 * Notes made for study purposes
 * Some of the solutions are mine
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    // built in JS arrray method
    // Space O(1)
    // Time O(N)
    s.reverse();
    
    // create new arr and load old arr
    // Space O(n)
    // Time O(N) 
    let tempArr = [];
    let currLength = s.length
    for(let i = 0; i < currLength; i++){
        tempArr.push(s.pop())
    }
    for(let i = 0; i < tempArr.length; i++){
        s[i] = tempArr[i]
    }
    
    // Swap from outside in
    // Space O(1)
    // Time O(N / 2) only half the inputs get processed
    let count =0;
    let leftIdx = 0;    
    let rightIdx = s.length - 1;
    while(leftIdx < rightIdx){
        let tempLeft = s[leftIdx];         
        s[leftIdx]=s[rightIdx];
        s[rightIdx] = tempLeft
        leftIdx++;        
        rightIdx--;
    }
};