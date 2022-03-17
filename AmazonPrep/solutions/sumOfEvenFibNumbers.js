/**
 * https://projecteuler.net/problem=2
 * write a functin that sums all even numbers of n fibonacci sequence
 * if the num % 2 === 0 then add that to result 
 * @return {number}
 */

const MAX_SUM_LIMIT = 4000000;

module.exports = function(num){
   let result  = 0;
   let idx = 0;
  while(idx < num){
    let currFib =fib(idx);
    if(currFib % 2 === 0){
        const nextSum = parseInt(currFib) + parseInt(result);
        if(nextSum > MAX_SUM_LIMIT){
            break;
        }
        result = nextSum
    }
    idx++;
   }
   return result;
}
let memoFib = [];

function fib(n){
    if(n == 0 || n == 1) return 1;
    if (memoFib[n]) {
        return memoFib[n];
    } else {
        let result =  fib(n - 1) +  fib( n - 2);
        memoFib[n] = result
        return result
    }
    
}


