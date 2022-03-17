/**
 * Problems and solutions from Leetcode
 * Notes made for study purposes
 * Some of the solutions are mine
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    // brute force too many operations
    // notice memory usage on leet code
    // Time O(n)
    // Space O(n)
    
    let countOfZeros = 0;
    let arrToCopyNonZeros = [];
       for(let i = 0; i < nums.length; i++){
           if(nums[i] !== 0){
               arrToCopyNonZeros.push(nums[i]);
           }
           if(nums[i] === 0){
             countOfZeros++;
          }
        }
        while(countOfZeros > 0){
            arrToCopyNonZeros.push(0);
            countOfZeros--;
        }
        for(let i = 0; i < nums.length; i++){
           nums[i] = arrToCopyNonZeros[i];
        }
       
    // space optimal O(1)
    // Time O(n)
        let lastIdxThatIsNotZero = 0;
        for(let i = 0; i < nums.length; i++){
           if(nums[i] !== 0){
               nums[lastIdxThatIsNotZero++]= nums[i];
           }
        }
        // track the last index that is not zero nums.length === 5 last idx === 3 
        // i == 3 break at 5 loops twice
        for(let i = lastIdxThatIsNotZero; i < nums.length; i++){
            nums[i] = 0; 
        }
        
    };