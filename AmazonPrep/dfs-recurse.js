// Algorithm 
// base case
// return recusive call
// back tracking
/**
 * 
 *   
 *  
 * 
 */ 

 const testMatrix = [ 
  ['A','R','S','E'],
  ['C','O','C','K'],
  ['F','U','C','K']
]
const testWordToSearch = ['R','O','C','K']

function dfsIterative(graphToSearch, wordToSearch){
  if(!graphToSearch) return false;
  if(graphToSearch.length === 0) return false;
  // pairs to check adjecent items 
  const adjRows = [0, -1, 1, 1, 0, -1, -1, -1 ];
  const adjCols = [-1, -1, 0, 1, 1, 1, 0, -1 ];
  // load first vertex into stack (start point)
  const visitedSpots = createVisitedMatrix(graphToSearch);
  const rowLength = graphToSearch.length
  const colLength = graphToSearch[0].length
  // chech every item in every row
  const res = dfsRec(graphToSearch, 0,0, visitedSpots, 0, testWordToSearch)
  console.log(res)
}

function dfsRec(graph, currRow, currCol, visitedNodes, currIdxOfCharToFind, wordToMatch, lastSpotOfNodeMatch = []){
  console.trace(currRow, currCol, visitedNodes, currIdxOfCharToFind, wordToMatch, lastSpotOfNodeMatch)
  if(visitedNodes[currRow][currCol]){
    return lastSpotOfNodeMatch
  } else {
    visitedNodes[currRow][currCol] = true;
    const currNodeToCheck = graph[currRow][currCol];
     // when you find match
    if(wordToMatch[currIdxOfCharToFind] === currNodeToCheck){
      if(lastSpotOfNodeMatch.length === 0){
        currIdxOfCharToFind += 1;
        lastSpotOfNodeMatch.push([currRow,currCol]);
      } else {
          let isRowVAdj = Math.Abs(lastSpotOfNodeMatch[lastSpotOfNodeMatch.length -1 ][0] - currRow) <= 1;
          let isColAdj = Math.abs(lastSpotOfNodeMatch[lastSpotOfNodeMatch.length -1 ][1] - currCol) <= 1;
          if(isRowVAdj && isColAdj){
            lastSpotOfNodeMatch = [currRow, currCol]
            currIdxOfCharToFind += 1;
          }
        }
      }
    
  


  // RECURSE!!!!! 
  if(currCol === graph[currRow].length - 1){
    if(currRow === graph.length - 1){
      return;
    }else {
      dfsRec(graph, currRow + 1, 0, visitedNodes, currIdxOfCharToFind, wordToMatch)
    }
  }else {
    dfsRec(graph, currRow , currCol + 1, visitedNodes, currIdxOfCharToFind, wordToMatch)
  }
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

dfsIterative(testCaseOne, testWordToSearch)



/**
 * const testMatrix = [ 
  ['A','R','S','E'],
  ['C','O','C','K'],
  ['F','U','C','K']
]
const testWordToSearch = ['R','O','C','K']
// insert first item into stack
// while stack is bot empty iterate 
// 
function dfsIterative(graphToSearch, wordToSearch){
  if(!graphToSearch) return false;
  if(graphToSearch.length === 0) return false;
  // pairs to check adjecent items 
  const adjRows = [0, -1, 1, 1, 0, -1, -1, -1 ];
  const adjCols = [-1, -1, 0, 1, 1, 1, 0, -1 ];
  const stackForBacktracking = new Array();
  // load first vertex into stack (start point)
  const visitedSpots = createVisitedMatrix(graphToSearch, wordToCheck);
  const rowLength = graphToSearch.length
  const colLength = graphToSearch[0].length
  let row = 0;
  let col = 0;
  stackForBacktracking.push(graphToSearch[row][col]);
  try{
    while (row < rowLength  ){
      if(!visitedSpots[row][col]){
        console.log('graphToSearch[row][col] == ', graphToSearch[row][col])
        visitedSpots[row][col] = true;
      }
      for (let i = 0; i < adjRows.length; i++) {
          const itemAdjX = row + adjRows[i];
          const itemAdjY= col + adjCols[i];
          // account for items out of bounds
          if( itemAdjX < 0 || itemAdjY < 0 || itemAdjX >= graphToSearch.length || itemAdjY >= graphToSearch[0].length) continue
         
        
      }
      
      // run through stack to search adjecent items
      // while(stackForBacktracking.length !== 0){
      //   // do somthing with stack
      //   const itemToSearch = stackForBacktracking.pop();
      //   for (let i = 0; i < adjRows.length; i++) {
      //     const itemAdjX = row + adjRows[i];
      //     const itemAdjY= col + adjCols[i];
      //     // account for items out of bounds
      //     if( itemAdjX < 0 || itemAdjY < 0 || itemAdjX >= graphToSearch.length || itemAdjY >= graphToSearch[0].length) continue
      //       stackForBacktracking.push(graphToSearch[itemAdjX][itemAdjY]);
      //   }
      // }
 
       if(col < colLength ){
        col++;
      }
      if(row < rowLength && col === colLength ) {
        col = 0;
        row++;
      } 
      // to print only once in the event the item has been visited 
    
    }
  }catch(err){
    console.log(err)
    console.log(' row',  row)
    console.log(' col',  col)
  }
}


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

dfsIterative(testCaseOne, testWordToSearch)
 */