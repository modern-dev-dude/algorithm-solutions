const matrix =[
   ['I', 'P', 'N', 'L'],
   ['E', 'P', 'G', 'H'],
   ['G', 'X', 'X', 'F'],
   ['R', 'N','C', 'J']
  ]
  /**
   * pgxe
   * pxrg
   * nhxppie
   * epnl
   * iegr 
   */

  /**
   * Step 1 build hash table 
   * step 2 iteratate through dictionary
   * step 3 set up back trak if two neighbors exsist but only one path -- see above 'pgxe'
   * step 4 store solutions  
   */

  /**
   * @param {Array<Array>} matrixToHash
   * returns a hash map of indencies in a particular key
   * can be any size grid, items do not have to be even i.e. 4 x 4, 6 x 3, 2 x 5 .... 
   * @returns {Map} 
   */
  function buildHashTablefromMatrix(matrixToHash){
    const mapToReturn = new Map();
    for(let i = 0; i < matrixToHash.length; i++){
      for(let k = 0; k < matrixToHash[i].length; k++){
        if(mapToReturn.has(matrixToHash[i][k])){
          const currIndiceisMapped = mapToReturn.get(matrixToHash[i][k]);
          mapToReturn.set(matrixToHash[i][k],[...currIndiceisMapped, [i,k]])
        }else {
          mapToReturn.set(matrixToHash[i][k],[[i,k]])
        }
      }
    }
    return mapToReturn;
  }

  /**
   * 
   * @param {Array<array>} wordMatrix 
   * @param {Array<string>} dictionaryOfLookupValues
   * 
   * takes in a matrix of letters and a string array of possible solutions 
   * returns a string array of found matches 
   * twp main steps
   * preprocessing the matrix to hash map O(V * E)
   * stores a map of letters in the matrix and their relative indecies 
   * searching the hashmap for solutions O(1) 
   * memoizes hashmap to reinitialize after word is searched without preprocessing again 
   * @returns {Array<atring>} 
   */
  function searchWord(wordMatrix, dictionaryOfLookupValues){
    const solutions = [];
    const mapToUseForLookup =  buildHashTablefromMatrix(wordMatrix);
    for(let i = 0; i < dictionaryOfLookupValues.length; i++){
      const isSolution = searchMap(mapToUseForLookup,dictionaryOfLookupValues[i])
      if(isSolution){
        soluitions.push(dictionaryOfLookupValues[i])
      }
    } 
    console.log(solutions)
    return solutions;
  }

  /**
   * 
   * @param {Map} map 
   * @param {string} valueToSearch
   * @returns {boolean} 
   */
  function searchMap(map, wordToSearch){
    let lastCharIdxVisited = -1;
    let currIdxToCompare = undefined;
    for(let i = 0; i < wordToSearch.length; i++){
      const letterToSearch =wordToSearch.charAt(i).toUpperCase();
        if(map.has(letterToSearch)){
          if(!currIdxToCompare){
            currIdxToCompare = map.get(letterToSearch)
          }else {
            const listOfIndiciesToCompare = map.get(letterToSearch);
            // if key is here and no indicies left, then no match occured
            if(listOfIndiciesToCompare.length === 0){
              return false;
            }
            while(listOfIndiciesToCompare.length > 0){
              const coordinateToTest = listOfIndiciesToCompare.pop();
              const indiciesToPlaceBackInMap = [];
              // if the distance from curr x to last x > 1 and less than -1 no match
              const xDistance = Math.abs(coordinateToTest[0],coordinateToTest[0]);
              const yDistance = Math.abs(coordinateToTest[1],coordinateToTest[1]);
              // not a valid path
              if(xDistance < -1 || xDistance > 1 || yDistance < -1 || yDistance > 1 ){
                indiciesToPlaceBackInMap.push(coordinateToTest);
                // how do I backtrack 
                continue;
              }else {
                // match found 
                map.set(letterToSearch, indiciesToPlaceBackInMap);
                lastCharIdxVisited = i;
                break;
              }
            }

          }
        }
    }
    return lastCharIdxVisited === wordToSearch.length - 1;
  }