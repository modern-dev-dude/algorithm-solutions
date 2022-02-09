/**
 * Copyright LeetCode 
 * Suppose you are at a party with n people labeled from 0 to n - 1 and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know the celebrity, but the celebrity does not know any of them.
 * Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. 
 * You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).
 * You are given a helper function bool knows(a, b) that tells you whether A knows B. Implement a function int findCelebrity(n). There will be exactly one celebrity if they are at the party.
 * Return the celebrity's label if there is a celebrity at the party. If there is no celebrity, return -1.
 * 
 */
/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
/**
* Time O(n)
* Space O(1)
*/
var solution = function(knows) {
  function isCeleb(i, n){
      for(let k = 0; k < n; k++){
          if(i === k)continue;
          if(knows(i,k) || !knows(k,i)){
              return false;
          }
      }
      return true;
  }
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
      for(let i = 0; i < n; i++){
        if(isCeleb(i,n)){
            return i
        }
      }
      return -1;
  };
};