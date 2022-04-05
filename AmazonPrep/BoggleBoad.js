/**
 * Standard Boggle Board Cubes 
 * AAEEGN, ABBJOO, ACHOPS, AFFKPS,
 * AOOTTW, CIMOTU, DEILRX, DELRVY,
 * DISTTY, EEGHNW, EEINSU, EHRTVW,
 * EIOSST, ELRTTY, HIMNQU, HLNNRZ
 */

/**
 * test board 
 * [
 * ['G', 'I', 'Z],
 * ['U', 'E', 'K'],
 * ['Q', 'S', 'E']
 * ]
 * 
 * Dictionary 
 * ["GEEKS", "FOR", "QUIZ", "GO"]
 */

/**
 * Function that takes a dictionary of words as an array and
 * a matrix representing a boggle board as arguments
 * @param {string[]} dictionaryOfPossibleSolutions 
 * @param {string[][]} boggleMatrix 
 * @return {boolean}
 */
function checkBoggleBoard_DFS(dictionaryOfPossibleSolutions, boggleMatrix){
    for(let i = 0; i < boggleMatrix.length; i++){
        while(){
            
        }
    }
    return true
}
/**
 * @param {string[][]} boggleMatrix 
 * @return {string[][]} 
 */
function cresetVisitedItems(boggleMatrix){
    const innerBoardMatrixLength = boggleMatrix[0].length;
    const resetVisitedBoggleGrid = new Array(innerBoardMatrixLength);
    const falseRow =  new Array(innerBoardMatrixLength);
    falseRow.fill(false,0,innerBoardMatrixLength)
    resetVisitedBoggleGrid.fill(falseRow,0,innerBoardMatrixLength)
    return resetVisitedBoggleGrid
}