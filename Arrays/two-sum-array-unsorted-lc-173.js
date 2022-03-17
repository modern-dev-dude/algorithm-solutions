/**
 * Unsorted array give  sum of array with exactly one solution
 * Time O(N^2)
 * Space O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    if(nums.length === 2) return [0,1]
    let solution = [-1,-1];
    let xIdx = 0;
    while(xIdx < nums.length - 1){
         for(let i = 1; i <nums.length; i++ ){
            if(xIdx === i) continue;
            if(nums[xIdx] + nums[i] === target){
               return [xIdx, i];
             }
         }
        xIdx++;
    }
    return solution;
};