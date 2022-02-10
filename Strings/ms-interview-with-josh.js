"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");


// subStrToMatch = "bbac"          <--- size is m
// strToTest     = "abbadadbacdfdf[acbb]daa[abcb]a"   <---- size is n
//                  ^
// strToTest     = "abbadadbacdfdf[acbb]daa[abcb]a"
//                   ^  
// O(nxm)

// aaaaabbbbc
// Time O(n + m)
function lookForMAtchingSubstr (subStrToMatch, strToTest){
    const strMap = initMap(subStrToMatch);
    let count =0;
    /**
     * {
     * b: 0
     * a: 0
     * c: 1
     * }
     *  get('d') return undefined 
     */
    for(let i = 0; i < strToTest.length; i++){
        let lookForMatch = strMap.get(strToTest[i]);
       if(lookForMatch > 0){
           // add a counted  
           strMap.set(strToTest[i] , lookForMatch--);
            count++;
       }else if(lookForMatch === 0 ){
           // check for solution 
           // 3 !=4 
           // aaaaaaaaaaaaaaaaaaaaaaa[abbbbc]
           if(count === subStrToMatch.length){
            //   return a valid match init the map 
           }
           continue;
       } else if(lookForMatch === undefined){
           strMap = initMap(subStrToMatch);
       }
       
    }
}

function initMap(arrToMap){
    let strMap = new Map();
     for(let i = 0; i < arrToMap.length; i++){
        // returns undefined if not already in map 
        // if in map returns the value of the key
        let itemInMap = strMap.get(arrToMap[i]);
        if( itemInMap === undefined){
            strMap.set(arrToMap[i], 1);
        }else{
            strMap.set(arrToMap[i], itemInMap + 1);
        }
    }
    return strMap;
}

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