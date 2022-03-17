/**
 * https://projecteuler.net/problem=1
 * write a functin that sums all the multples of 3 and 5 together below the target input
 * if the num % 3 or num % 5 === 0 then add that to result 
 * @return {number}
 */
module.exports = function(numLength){
    let result = 0;
    for(let i = 0 ; i < numLength; i++){
        if(i % 3=== 0 || i % 5 === 0){
            result +=i;
        }
    }
    return result;
}