/**
 * Given a non-empty array of integers nums, THIS allopws for bitwise-> every element appears twice except for one. Find that single one.
 * Checks if the array is same num or not same 
 * if not assign curr num 
 * if so removes the num added 0
 */
/**
 * 
 * @param {*} nums 
 * @returns 
 * Time O(n)
 * Space O(1)
 */
 var singleNumber = function(nums) {
  let singleNum = 0;
  for(let i of nums){
      singleNum ^= i
  }
  return singleNum
};

/**
 * Time O(n)
 * Space O(1) 
 *  
 */
var singleNumber = function(nums) {
  for (let i =0;i< nums.length;i++){
      if (nums.indexOf(nums[i])== nums.lastIndexOf(nums[i])){
          return nums[i];
      }
  }
};

/**
 * With reduce
 */
 var singleNumber = function(nums) {
  return nums.reduce((a,b) => a ^ b)
};

/**
 * EX 
 * input
 * [2,2,1,4,1,4,5,6,6,9,9,8,8]
 * singleNum :  0
 * i :  2
 * singleNum :  2
 * i :  2
 * singleNum :  0
 * i :  1
 * singleNum :  1
 * i :  4
 * singleNum :  5
 * i :  1
 * singleNum :  4
 * i :  4
 * singleNum :  0
 * i :  5
 * singleNum :  5
 * i :  6
 * singleNum :  3
 * i :  6
 * singleNum :  5
 * i :  9
 * singleNum :  12
 * i :  9
 * singleNum :  5
 * i :  8
 * singleNum :  13
 * i :  8
 * Notice it never finds another 5 so every other element is added and substracted
 */