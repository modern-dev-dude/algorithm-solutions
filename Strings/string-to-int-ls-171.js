/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  let stack = [];
  for(let i =0; i < s.length; i++){
      if(s[i] === ' '){
          if(stack.length > 0){
             break;
          }
          continue;
      }
      if(i > 0 && isNaN(stack[i-1]) && isNaN(s[i]) && stack.length > 0){
          stack.splice(i -1, 1);
          break;       
      }
      // chack for - or + to already be there 
      if(
          (stack.indexOf('-') !== -1 && (s[i] === '-' || s[i] === '+')) 
          || 
          (stack.indexOf('+') !== -1 && (s[i] === '-' || s[i] === '+'))
      ){
          break;                
      }
      if(s[i] !== '-' && s[i] !== '+' && isNaN(s[i])) break;
      stack.push(s[i]);
  }
  if(isNaN(stack[stack.length -1])){
     stack.pop()
  }
  let resAsString = stack.join('')
  let resultAsNum = isNaN(resAsString)? 0 : Number(resAsString)
  let resInBounds = getConstraints(resultAsNum)
 return resInBounds
};

function getConstraints(num){
  const upperBound = Math.pow(2,31) - 1;
  const lowerBound = Math.pow(-2,31);

  if(num > upperBound){
     return upperBound
  }else if(num < lowerBound){
      return lowerBound;
  }else {
      return num;
  }
}
/**
 * With reg ex
 */
 var myAtoi = function(s) {
  const min  =(-2) ** 31 
  const max = 2 ** 31 - 1
  if (s.length===0) return 0
  const clear = s.trim().match(/^(\+|\-)?[0-9]+/)
  if (clear === null) return 0
  if (clear[0] < min) return min
  if (clear[0] > max) return max
  return clear[0]
 }

 /**
  * With Parse INT
  */
 /**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // extracts unique numbers until is undefined
 return getUpperOrMinInt32(parseInt(s, 10));
};

function getUpperOrMinInt32(num){
  if(isNaN(num)) return 0;
  const upperBound = Math.pow(2,31) - 1;
  const lowerBound = Math.pow(-2,31);
  if(num > upperBound){
   return upperBound
  }else if(num < lowerBound){
    return lowerBound;
  }else {
    return num;
  }
}

/**
 * Less Memory 
 */
 var myAtoi = function(s) {
 const num = parseInt(s);
    if(!num)return 0;
    else if(num > 2147483647)return 2147483647;
    else if(num < -2147483648)return -2147483648;
    return num;
 }