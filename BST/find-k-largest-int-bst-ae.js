// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/** 
* time O(N)
* space O(1)
* not optimal 
*/
function findKthLargestValueInBst(tree, k) {
	const res = inOrderTraverse(tree,[]);
	return res[ k-1];
}
function inOrderTraverse(tree, array, k ) {
  // Write your code here.
	if (tree === null) return;
	inOrderTraverse(tree.right, array);
	array.push(tree.value);
	inOrderTraverse(tree.left, array);
	return array;
}

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
* Time O(h+k)
* Space O(h)
* more optimal solution
*/

function findKthLargestValueInBst(tree, k) {
	let infoOfTree = {
		numNodes: 0,
		lastVisitedNodeVal: -1,
	}
	preOrderTraverse(tree,k,infoOfTree);
	return infoOfTree.lastVisitedNodeVal;
}
function preOrderTraverse(tree, k, treeInfo ) {
  // Write your code here.
	if (tree === null || treeInfo.numNodes >= k) return;
	preOrderTraverse(tree.right, k, treeInfo);
	if(treeInfo.numNodes < k){
		treeInfo.numNodes++;
		treeInfo.lastVisitedNodeVal = tree.value;
		preOrderTraverse(tree.left, k, treeInfo);
	}
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;

