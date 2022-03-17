/**
 * Is valid if
 * all leters lowercase
 * only alphanumeric
 * string.charAt(0) !== string.charAt(1) if length is === 2
 * Time O(nLog(n))
 * Space O(n) ? 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {

  let regEx = new RegExp('[^a-zA-Z0-9]','g')
  let trimSpaces =s.replaceAll(regEx, '').toLowerCase();
  let left = 0 ;
  let right = trimSpaces.length - 1;
  while(left < right){
      if(trimSpaces.charAt(left) !== trimSpaces.charAt(right) ){
        return false
      }
      left++;
      right--;
  }
  return true
};