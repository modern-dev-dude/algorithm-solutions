/**
* input length needs to be at least / 2 if it is not even then it is not valid
* Time O(n)
* Space O(n)
*
* if the item at index is an open 
* then push to stack aclosing bracket
* else if item at curr idx does not equal the last closing bracket 
* in the stack then return false (inside -> out) 
*
*
* ex
* input [{}]
* pass one
* if(map has key of '[' then add ']' to stack)
* stack[']']
* if(map has key of '{' then add '}' to stack)
* stack[']','}']
* if(map has key of '}' ) result in false keys are only open brackets
* else if stack.pop !== item at idx results in false -> continue loop
* stack[']']
* if(map has key of ']' ) result in false keys are only open brackets
* else if stack.pop !== item at idx results in false -> continue loop
* stack[]
* finished iteration stack empty -> valid input
*/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const stack = [];
    // Assign the key of the Map to the open bracket
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);
  for (let i = 0 ; i < s.length ; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    } 
  }
  return stack.length === 0;
};
/**
// Time O(n)
// Space O(n)
var isValidNoHashMap = function(){
    const stack =[];
    for(let i = 0; i < s.length; i++){
        const lastItem = stack[stack.length - 1];
        if(s[i] === '(' ||   s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
        }else if(s[i] === ')' && lastItem === '(' && stack.length !== 0){
            stack.pop();
        }else if(s[i] === ']' && lastItem === '[' && stack.length !== 0){
           stack.pop();
        }else if(s[i] === '}' && lastItem === '{' && stack.length !== 0){
            stack.pop();
        }else {
            return false;
        }
    }
    return stack.length === 0;
}
*/