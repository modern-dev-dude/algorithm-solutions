"use strict";
// Complexity O(n+m)
// only touch each element of each string once

function lookForMatchingSubstr(subStrToMatch, strToSearch) {
    const mapOfLettersToFind = new Map(); //max occurances of values in substring
    const mapToStoreFoundStrings = new Map(); // current occurances
    let numberOfSolutionsFound = 0;
  
    // build map of keys
    for (let i = 0; i < subStrToMatch.length; i++) {
      //set a map of each letter max occurances
      let itemInMap = mapOfLettersToFind.get(subStrToMatch[i]);
      if (itemInMap === undefined) {
        mapOfLettersToFind.set(subStrToMatch[i], 1);
      } else {
        mapOfLettersToFind.set(subStrToMatch[i], itemInMap + 1);
      }
    }
  
    let countOfItemsFound = 0;
    for (let i = 0; i < strToSearch.length; i++) {
        let lookForMatch = mapToStoreFoundStrings.get(strToSearch[i]) ?? 0;
        let currCharMaxOccurances = mapOfLettersToFind.get(strToSearch[i]);
        // check if item found is an item in the substring
        // check if the current amount see < currCharMaxOccurances a: 0 -> a:1
        // if true add item to mapToStoreFoundStrings and increment the amount of result
        // check for solution by comparing count of found to substring length
        if (currCharMaxOccurances === undefined) {
          mapToStoreFoundStrings.clear();
          countOfItemsFound = 0;
          continue;
        } else if ( currCharMaxOccurances !== undefined && lookForMatch < currCharMaxOccurances) {
          countOfItemsFound++;
          let newCountOfFoundItem = lookForMatch + 1;
          mapToStoreFoundStrings.set(strToSearch[i], newCountOfFoundItem);
          if (countOfItemsFound === subStrToMatch.length){
              mapToStoreFoundStrings.clear();
              countOfItemsFound = 0;
              numberOfSolutionsFound++;
              continue;
          }
        // if curent max occurences is met before I add to current occurnces 
        // i.e. aaaabbbccb
        // then I know there is three in row 
        // clear the current found occurences 
        // set the curr item and occurences back in map and continue
        } else if(currCharMaxOccurances === lookForMatch){
          if(strToSearch[i] === strToSearch[i - currCharMaxOccurances]){
            mapToStoreFoundStrings.clear();
            mapToStoreFoundStrings.set(strToSearch[i], currCharMaxOccurances);
            countOfItemsFound = currCharMaxOccurances;
          }
         
        }
      }
    document.getElementById("root").innerHTML = `<p>String to search in: ${strToSearch}</p><p>Substring to match : ${subStrToMatch}</p><p>Number of Solutions Found : ${numberOfSolutionsFound}</p>`;
  }
  
  /**
  * Test cases used
  * uncomment out one at a time and answer appears on dom
  */
  lookForMatchingSubstr("bbac", "abbadadbacdfdfacbbdaaabcba"); // sets dom to 2
  // lookForMatchingSubstr('bbac', 'aaaaaaaaaaaaaaaaaaaaabbbccccabcb'); // sets dom to 1
  // lookForMatchingSubstr('bbac', 'aaaaaaaaaaaaaaaaaaaaabbbcacccabcb'); // sets dom to 2
  // lookForMatchingSubstr('bbac', 'aaaaaaaaaaaaaaaaaaaaabbb'); // sets dom to 0
  // lookForMatchingSubstr('bbac', 'abc'); // sets dom to 0
  // lookForMatchingSubstr('bbac', 'abcc'); // sets dom to 1
  // lookForMatchingSubstr('bbac', 'abbc'); // sets dom to 1
  


// subStrToMatch = "bbac"          <--- size is m
// strToTest     = "abbadadbacdfdf[acbb]daa[abcb]a"   <---- size is n
//                  ^
// strToTest     = "abbadadbacdfdf[acbb]daa[abcb]a"
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
