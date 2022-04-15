/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  for(let i = 0; i < board.length; i++){
      for(let k = 0; k < board[i].length; k++){
        if(lookForMatch(board, i, k, word, 0)){
            return true
        };
      }
    }
    return false
};

function lookForMatch(board, row, col, word, wordIdx){
    if(wordIdx >= word.length) return true;
    if(row < 0 || row === board.length || col < 0 || col === board[row].length || board[row][col] !== word.charAt(wordIdx)){
      return false;
    }
    let returnVal = false;
    // markBoard spot as visited for next iteration
    board[row][col] = true;
      const adjListRow = [0,1,0,-1]; 
      const adjListCol = [1,0,-1,0];
    for (let i = 0; i < adjListRow.length; i++) {
      returnVal = lookForMatch(board, row + adjListRow[i], col + adjListCol[i], word, wordIdx + 1);
      if (returnVal){
        break;
      }
    }
    board[row][col] = word.charAt(wordIdx);
    return returnVal;
}

