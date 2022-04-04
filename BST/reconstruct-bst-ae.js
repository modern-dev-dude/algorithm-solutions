// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
* Time O(N^2)
* Space O(h)
*/
function reconstructBst(preOrderTraversalValues) {
	if(preOrderTraversalValues.length === 0) return null;
	
	const currentValue = preOrderTraversalValues[0];
	let rightSubtreeRootIdx  = preOrderTraversalValues.length;
	
	for(let idx = 0; idx < preOrderTraversalValues.length; idx++){
		const value = preOrderTraversalValues[idx];
		if(value >= currentValue){
			rightSubtreeRootIdx = idx;
			break;
		}
	}
	
	const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
	const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
	return new BST(currentValue, leftSubtree, rightSubtree)
}

/**
* Time O(N)
* Space O(N) 
 */
function reconstructBstBetter(preOrderTraversalValues) {
	const treeInfo = {
		rootIdx: 0
	}
  // Write your code here.
	return reconstructBstFromRange(preOrderTraversalValues, treeInfo, Infinity, -Infinity);
	// upper and lower  value
}

function reconstructBstFromRange(array, currTreeInfo, upperBound, lowerBound){
	// check for all nodes 
	// if root idx === array.length return 
	if(currTreeInfo.rootIdx === array.length) return null;
	
	const rootVal = array[currTreeInfo.rootIdx];
	if(rootVal < lowerBound || rootVal >= upperBound) return null;
	
	currTreeInfo.rootIdx++;
	const leftSub = reconstructBstFromRange(array, currTreeInfo, rootVal, lowerBound);
	const rightSub = reconstructBstFromRange(array, currTreeInfo, upperBound, rootVal);
	return new BST(rootVal, leftSub, rightSub)
	
}


// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
