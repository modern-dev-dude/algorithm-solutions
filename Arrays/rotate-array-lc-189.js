/**
 * Problems and solutions from Leetcode
 * Notes made for study purposes
 * Some of the solutions are mine
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    
    // Time O(n X k)
    // space O(1)
    k %= nums.length;
    let temp;
    for (let i = 0; i < k; i++) { 
        let prev = nums[nums.length - 1];
        for (let j = nums.length - 1; j > 0; j--) {
             temp = nums[j];
             nums[j] = prev;
             prev = temp;
         }
     }

    // extra array
    //  Time O(n)
    //  space O(n)
    // sets new array of same size as nums
    let a = new Array(nums.length);
    k %= nums.length;
    for (let i = 0; i < nums.length; i++) {
      // starts a[ i + k]
      // % is for when i + k > size of array
      // if array length is 6 idx 5 -> idx 6 % 5 = 0 -> idx 7 % 5 -> 2
      a[(i + k) % nums.length] = nums[i];
    }
    // overight nums
    for (let i = 0; i < nums.length; i++) {
      nums[i] = a[i];
    }
   
    // Cyclic replacement
    //  Time O(n)
    //  space O(1)
    //  use case when reduction of space is needed
    k = k % nums.length;
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
      let current = start;
      let prev = nums[start];
      do {
        let next = (current + k) % nums.length;
        let temp = nums[next];
        nums[next] = prev;
        prev = temp;
        current = next;
        count++;
      } while (start != current);
    }
    // reverse
    // reverse first half
    // reverse second half
    //  Time O(n)
    //  space O(1)
    //  O(n) but the runtime is slower due to multple passes through arr
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
    function reverse (nums, start, end){
        while (start < end) {
          let temp = nums[start];
          nums[start] = nums[end];
          nums[end] = temp;
          start++;
          end--;
        }
    }
