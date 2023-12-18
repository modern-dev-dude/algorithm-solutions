"use strict";
// Complexity O(n+m)
// only touch each element of each string once
// Complexity O(n+m)
// only touch each element of each string once
// sliding window approach

function anagramSearchInStringWithSlidingWindow(subStrToMatch, strToSearch) {
  const maxOccurrenceMap = new Map(); // max occurrences of values in substring
  // build map of max occurrences
  for (let i = 0; i < subStrToMatch.length; i++) {
    //set a map of each letter max occurrences
    if (maxOccurrenceMap.get(subStrToMatch[i]) === undefined) {
      maxOccurrenceMap.set(subStrToMatch[i], 1);
    } else {
      maxOccurrenceMap.set(
        subStrToMatch[i],
        maxOccurrenceMap.get(subStrToMatch[i]) + 1
      );
    }
  }

  let resultIdx = [];
  let startIdxOfWindow = 0;
  let matched = 0;

  for (let i = 0; i < strToSearch.length; i++) {
    const currRightChar = strToSearch.charAt(i);
    // right slide
    if (maxOccurrenceMap.get(currRightChar) !== undefined) {
      maxOccurrenceMap.set(
        strToSearch[i],
        maxOccurrenceMap.get(currRightChar) - 1
      );
      if (maxOccurrenceMap.get(strToSearch.charAt(i)) === 0) {
        matched++;
      }
    }

    // left
    if (i >= subStrToMatch.length) {
      const currLeftChar = strToSearch.charAt(startIdxOfWindow);
      const currCharCount = maxOccurrenceMap.get(currLeftChar);
      const nextCharCount = currCharCount + 1;

      if (currCharCount !== undefined) {
        maxOccurrenceMap.set(currLeftChar, nextCharCount);
        if (matched > 0 && currCharCount === 0) {
          matched--;
        }
      }

      startIdxOfWindow++;
    }

    if (matched === maxOccurrenceMap.size) {
      resultIdx.push(startIdxOfWindow);
    }
  }

  return resultIdx;
}

/**
 * Test cases used
 * uncomment out one at a time and answer appears on dom
 */
// anagramSearchInStringWithSlidingWindow("bbac", "abbadadbacdfdfacbbdaaabcba"); // results found 3
// anagramSearchInStringWithSlidingWindow("bbac", "aaaaaaaaaaaaaaaaaaaaabbbccccabcb"); // results found  1
// anagramSearchInStringWithSlidingWindow('bbac', 'abc'); // results found  0
// anagramSearchInStringWithSlidingWindow('bbac', 'abcc'); // results found  1
// anagramSearchInStringWithSlidingWindow('bbac', 'bcaacb'); // results found  0
// anagramSearchInStringWithSlidingWindow("bbac", "aaaaaaabcbaaaaaaaabbcaaacbbaaabbbccccabcb"); // results found 7
//anagramSearchInStringWithSlidingWindow('bac', 'asdadasdasdasdbbacasdasdasdasd');
