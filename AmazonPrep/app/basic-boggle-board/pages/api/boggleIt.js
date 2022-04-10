export default function handler(req, res) {
  const createBoggleBoard = setUpGame();  
  res.status(200).json({ gameBoard: createBoggleBoard})
}
function setUpGame(){
  const boggleBoard = [];
  const randomBoard = buildRandomBoard(4);
  // build inner HTML 
  for(let i =0; i < randomBoard.length; i++){
    let rowOfCharsToReplaceNum = [];
    for(let k =0; k < randomBoard[0].length; k++){
      const currCharOnGrid = String.fromCharCode(randomBoard[i][k]).toUpperCase();
      rowOfCharsToReplaceNum.push(currCharOnGrid);
    }
    boggleBoard.push(rowOfCharsToReplaceNum);
  }
  return boggleBoard
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
