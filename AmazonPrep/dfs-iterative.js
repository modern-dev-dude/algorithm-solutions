
const testDictionary = ['ROCK', 'FOR', 'asdasd']
const  loggerStringArgBuilder = (key, val) => `${key} == ${val}` 

function checkFoSolution(boggleBoard, wordDictionary){
  let solutions = []
  for(let wrdIdx = 0; wrdIdx < wordDictionary.length; wrdIdx++){
    // checks every item in graph
    for(let i = 0; i < boggleBoard.length; i++){
      let currSolutionLength = solutions.length;
      // traverse rows 
      for(let k = 0; k < boggleBoard.length; k++){
        // traverse cols 
        let isMatch = dfsIterative(boggleBoard, wordDictionary[wrdIdx], i, k);
        // logger(`Char at ${i}, ${k}`, isMatch)
        if (isMatch){
          solutions.push(wordDictionary[wrdIdx]);
          break;
        }
      }
      if(solutions.length > currSolutionLength){
        break;
      }
    }
  }
  logger(
    loggerStringArgBuilder('solutions', solutions),
    loggerStringArgBuilder('solutions.length', solutions.length),
  )
  return solutions.length > 0;
}

function dfsIterative(graphToSearch, wordToSearch,  startRow, startCol){
  const adjRows = [0, -1, 1, 1, 0, -1, -1, -1 ];
  const adjCols = [-1, -1, 0, 1, 1, 1, 0, -1 ];
  let currGraphRow = startRow;
  let currGraphCol = startCol;
  let currCharIdx = 0;
  let currCharInWordToCheck = wordToSearch.charAt(currCharIdx); 
  let currCharInGraph = graphToSearch[startRow][startCol];
  const visistedSpots = createVisitedMatrix(graphToSearch);
  visistedSpots[startRow][startCol] = true;
  if(currCharInGraph !== currCharInWordToCheck){
        return false;
  }else {
    // found first Char now increment for second and check adj chars
    currCharIdx++;
    currCharInWordToCheck = wordToSearch.charAt(currCharIdx); 
      // check adjency for match
      for(let k =0; k< adjRows.length; k++){
        const adjRowLocation = adjRows[k] + currGraphRow;
        const adjColLocation = adjCols[k] + currGraphCol;
        // handle out of bounds exceptions in graph 
        if( graphToSearch[adjRowLocation] === undefined || graphToSearch[adjRowLocation][adjColLocation] === undefined) continue; 

        // check for matches 
        const currCharAdjToGraphLocation = graphToSearch[adjRowLocation][adjColLocation];
        // skip previously used node
        if(visistedSpots[adjRowLocation][adjColLocation]){
          continue;
        }
       
        if(currCharAdjToGraphLocation === currCharInWordToCheck){
          // recet adj char in loop for next char
          k = 0;
          currGraphRow = adjRowLocation;
          currGraphCol = adjColLocation;
          visistedSpots[adjRowLocation][adjColLocation] = true;
          currCharIdx++;
          currCharInWordToCheck= wordToSearch.charAt(currCharIdx); 
          if(currCharIdx === wordToSearch.length) return true;
        }
      }
      // if no match in adj then return false 
      return false;
 // }
  }
}
/**
 * Creates a matrix of false values to keep track of visited vertexes 
 * N X N size (square)
 * time complexity O(2N) due to the .fill being O(N)
 * @param {Array<Array<string>>} graphToSearch
 * @return {Array<Array<string>>}
 */
function createVisitedMatrix(graphToSearch){
  const matrixToReturn =[];
  for(let i =0; i < graphToSearch.length; i++){
    let falseRow = [];
    for(let k =0; k < graphToSearch[0].length; k++){
      falseRow.push(false);
    }
    matrixToReturn.push(falseRow);
  }
  return matrixToReturn;
}

checkFoSolution(buildRandomBoard(), testDictionary)

/**
 * 
 * @param {number} size 
 * Randomizes chars from ASCII table and if Q -> QU
 *  97 - 122 for all lowercase 
 *  q = 113
 */
function buildRandomBoard(size){
  let gameBoardToReturn = [];
  for(let i =0; i < size; i++){
    let currRowItems = [];
    for(let k =0; k < size; k++){
      currRowItems.push( Math.floor(Math.random() * (122 - 97) + 97));
    }
    gameBoardToReturn.push(falseRow);
  }

  return gameBoardToReturn;
}

function logger(...args){
  for(let i = 0; i < args.length; i++){
    console.log(`arg num ${i} == `, args[i])
  }
}
