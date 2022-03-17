/**
 * Problems and solutions from Leetcode
 * Notes made for study purposes
 * Some of the solutions are mine
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//[1, 2,7,11,15]
var twoSum = function(numbers, target) {
    // easy bail out if there is only two items
    // a constraint was there is always one solution
    if(numbers.length === 2){
       return [1,2];
    }
    // track the left idx and right idx
    // if the sum is too big move right idx down by one
    // if the sum is too smal then move up left idx to make sum larger
    let left = 0;
    let right = numbers.length - 1;
    while(left < right){
        let sum = numbers[left] + numbers[right]
        if(sum === target){
          return [left + 1 , right +1]
        }else if(sum < target){
            left++;
        } else if(sum > target){
            right--;
        }
    }
    // if needed a case where no solution exist return [-1,-1]
    return [-1,-1]
};