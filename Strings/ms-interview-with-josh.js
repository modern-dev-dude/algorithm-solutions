"use strict";
// Complexity O(n+m)
// only touch each element of each string once
// Complexity O(n+m)
// only touch each element of each string once
// sliding window approach
function anagramSearchInStringWithSlidingWindow(subStrToMatch, strToSearch){
    const maxOccurranceMap = new Map(); // max occurances of values in substring
    const lengthOfSubstring = subStrToMatch.length;
    let countOfKeysInSubStrMatch = 0;
    // build map of max occurences
    for (let i = 0; i < subStrToMatch.length; i++) {
      //set a map of each letter max occurances
      let itemInMap = maxOccurranceMap.get(subStrToMatch[i]);
      if (itemInMap === undefined) {
        maxOccurranceMap.set(subStrToMatch[i], 1);
        countOfKeysInSubStrMatch++;
      } else {
        maxOccurranceMap.set(subStrToMatch[i], itemInMap + 1);
      }
    }
  
    let numOfValidSubstrings = 0;
    let resultIdx = [];
    let startIdxOfWindow = 0;
    let matched = 0;
    for (let i = 0; i < strToSearch.length ; i++) {
  
      const rightSideOfWindow = strToSearch[i];
      if(maxOccurranceMap.get(rightSideOfWindow) !== undefined){
        maxOccurranceMap.set(rightSideOfWindow, maxOccurranceMap.get(rightSideOfWindow)- 1);
          if (maxOccurranceMap.get(rightSideOfWindow)  === 0) {
              matched++;
           }
      }
      // we could set the start indexes or num of valid results
      if(matched === countOfKeysInSubStrMatch){
          resultIdx[resultIdx.length] = startIdxOfWindow;
          numOfValidSubstrings++;
      }
      // move window to left as needed
      if(i >= lengthOfSubstring - 1){
          // move window left
          let leftChar = strToSearch[startIdxOfWindow];
          startIdxOfWindow++;
          const leftCharOccurences = maxOccurranceMap.get(leftChar); 
          if(leftCharOccurences !== undefined){
              if(leftCharOccurences === 0){
              matched--;
              }
              maxOccurranceMap.set(leftChar, leftCharOccurences + 1)
          }
      }
    }
    console.log("resultIdx : " , resultIdx);
    console.log("numOfValidSubstrings : " , numOfValidSubstrings);
    document.getElementById(
      "root"
    ).innerHTML = `<p>String to search in: ${strToSearch}</p><p>Substring to match : ${subStrToMatch}</p><p>Number of Solutions Found : ${numOfValidSubstrings}</p>`;
  }
  
  
  /**
   * Test cases used
   * uncomment out one at a time and answer appears on dom
   */
  anagramSearchInStringWithSlidingWindow("bbac", "abbadadbacdfdfacbbdaaabcba"); // sets dom to 2
  // anagramSearchInStringWithSlidingWindow("bbac", "aaaaaaaaaaaaaaaaaaaaabbbccccabcb"); // sets dom to 1
  // anagramSearchInStringWithSlidingWindow('bbac', 'abc'); // sets dom to 0
  // anagramSearchInStringWithSlidingWindow('bbac', 'abcc'); // sets dom to 1
  // anagramSearchInStringWithSlidingWindow('bbaac', 'bcaacb'); // sets dom to 0
    

// subStrToMatch = "bbac"          <--- size is m
// strToTest     = "abbadadbacdfdf[acbb]daa[abcb]a"   <---- size is n
//                  ^
// strToTest     = "abbadadbacdfdf[acbb]daa[abcb]a"
//abbadadbacdfdfacbbdaaabcba
//                   ^  
// O(nxm)

// aaaaabbbbc
// Time O(n + m)

//[abbadadbacdfdf[acbb]daa[abcb]a]
// abb bba bada 
// abb(a)bcaa
// {
// b : 0
// a: 1
// c: 1
// }
// a bbabcaa
// 
// 0 1 2 3  
// set i = 3 instead of i = 1   
// set i = 5 instead of i = 2   


//Find substring matches
// Example 
// not exact 
// any order
// inputs the char to match / string to test
// will have 0 -< n matches 
// inputs are strings 
// iterate through the whole string 
// combo of a, b, c 
// [aaaa] 
// a
// bbac -> if match contiue idx 1 b
// loop strToTest
// on each letter loop subStrToMatch 
// if there is a match then remove the letter from there 
// [ bbac ] -> bbc -> bc -> c no match 
// reset the strToMatch temp  
// set 
// abba no match 
// [false, true, false ,false ]
