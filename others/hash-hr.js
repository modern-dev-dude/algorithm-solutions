'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/**
 * 
 * @param {*} events 
 * @returns 
 * TEST
 * 8
2
setPassword a
authorize 97
authorize 12756
authorize 12804
authorize 12829
authorize 12772
authorize 12797
authorize 98



5
2
setPassword 1
setPassword 2
setPassword 3
authorize 49
authorize 50



4
2
setPassword 000A
authorize 108738450
authorize 108738449
authorize 244736787


 */
/*
 * Complete the 'authEvents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY events as parameter.
 */

function authEvents(events) {
  const resArr = [];
  let currPassHash = 0;
  let currPass = ''
  for(let item of events ){
      if(item[0] === 'setPassword'){
          currPass = item[1];
          currPassHash = convertStringToHashVal(currPass);
      }
      if(item[0] === 'authorize'){
          const intOfAuth = parseInt(item[1]);
          console.log(intOfAuth , currPass.charCodeAt(0))
          if(intOfAuth === currPass.charCodeAt(0)){
              resArr.unshift(1);
          } else if(intOfAuth < currPassHash){
              resArr.unshift(0);
          }else if(intOfAuth == currPassHash ){
              resArr.unshift(1);
          }else if(intOfAuth <= currPassHash + 122 ){
              resArr.unshift(1);
          }else {
              resArr.unshift(0);
          }
      }
  }
  return resArr; 
}

function convertStringToHashVal(stringToHash){
  let currIdx = 0;
  function sumItUp(length, acc){
      if(currIdx >= stringToHash.length) return acc;
      const charVal = stringToHash.charCodeAt(currIdx);
      acc = acc + hasher(charVal, length);
      currIdx++;
      return sumItUp(length - 1 , acc);
  }
  return sumItUp(stringToHash.length, 0);
}
function hasher(valueToHash, n){
  const p = 131;
  const m = Math.pow(10, 9) + 7;
  n = n === 1 ? n : n - 1;
  return (valueToHash * Math.pow(p, n )) % m
}
