const  loggerStringArgBuilder = (key, val) => `${key} == ${val}` 
// set up globals for game 
let boggleBoard = [];

function checkFoSolution(){
  const wordDictionary = currentListOfWords();
  let solutions = [];
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
  if(solutions.length === 0){
      document.getElementById('solutionItem').innerHTML = `<div><h3>No solutions Found</h3<div>`
  }else {
      document.getElementById('solutionItem').innerHTML = `<div><h3>Solutions found : ${solutions.length}</h3><p>Items in dictionary: ${solutions.join().replaceAll(',',', ')}</p><div>`
  }

  return solutions.length > 0;
}
// this implementation is limited , can only backtrack one letter 
function dfsIterative(graphToSearch, wordToSearch,  startRow, startCol){
  const adjRows = [0, 1, 1, 1, 0, -1, -1, -1 ];
  const adjCols = [-1, -1, 0, 1, 1, 1, 0, -1 ];
  let currGraphRow = startRow;
  let currGraphCol = startCol;
  let currCharIdx = 0;
  let currCharInWordToCheck = wordToSearch.charAt(currCharIdx); 
  let currCharInGraph = graphToSearch[startRow][startCol];
  let didBacktrackOneLetter = false;
  let lastNodeVisited =[];
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
        if( 
          adjRowLocation < 0 || adjRowLocation >= graphToSearch.length || 
          adjColLocation < 0 || adjColLocation >= graphToSearch.length) continue; 
        // check for matches 
        const currCharAdjToGraphLocation = graphToSearch[adjRowLocation][adjColLocation];
       
        // skip previously used node
        if(!visistedSpots[adjRowLocation][adjColLocation]){
          if(currCharAdjToGraphLocation === currCharInWordToCheck){
              // store last node incase of backtracking
              lastNodeVisited = [currGraphRow,currGraphCol];
              didBacktrackOneLetter = false;
              // recet adj char in loop for next char
              // must set to -1 to account for the ++ from the for loop
              k = -1;
              currGraphRow = adjRowLocation;
              currGraphCol = adjColLocation;
              visistedSpots[adjRowLocation][adjColLocation] = true;
              currCharIdx++;
              currCharInWordToCheck= wordToSearch.charAt(currCharIdx); 
              if(currCharIdx === wordToSearch.length) return true;
            }
      
        }
          // go back and check other matches for neighbor letters are the same
        /**
        * [I P N L]
        * [E P G H]
        * [G X X F]
        * [R N C J]
        * 
        * ex inputs [ pgxe, pxgpe ] - need to check all possible paths   
        */

          if(k === adjRows.length - 1 && !didBacktrackOneLetter){
            didBacktrackOneLetter =true;
            currCharIdx--;
            currCharInWordToCheck= wordToSearch.charAt(currCharIdx); 
            k = -1;
            // undo adj [7] [ -1 , -1] 
            currGraphRow = lastNodeVisited[0];
            currGraphCol = lastNodeVisited[1];
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

// checkFoSolution(testMatrix, testDictionary)

function logger(...args){
  for(let i = 0; i < args.length; i++){
    console.log(`arg num ${i} == `, args[i])
  }
}

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
    gameBoardToReturn.push(currRowItems);
  }

  return gameBoardToReturn;
}

const currentListOfWords = () => {
  const currentCsvOfords = document.getElementById('dictionaryInput').value;
  return currentCsvOfords.split(',').map(words => words.toUpperCase());
}
function setUpGame(){
  let randomBoard = buildRandomBoard(4);
  
  let innerHTMLStr = ''
  // build inner HTML 
  for(let i =0; i < randomBoard.length; i++){
    let rowOfCharsToReplaceNum = [];
    for(let k =0; k < randomBoard[0].length; k++){
      const currCharOnGrid = String.fromCharCode(randomBoard[i][k]).toUpperCase();
      rowOfCharsToReplaceNum.push(currCharOnGrid);
      innerHTMLStr += `<div>${currCharOnGrid}</div>`
      
    }
    boggleBoard.push(rowOfCharsToReplaceNum);
  }

  document.getElementById('gameBoard').innerHTML = innerHTMLStr;
}
setUpGame();
