/**
 * 
 * @param {*} tree 
 * @param {*} array 
 * @returns array in specified order
 * 
 * Inorder traversal is is when current value is pushed to arrray between recursion calls 
 *  inorder -> left
 *  push current value into array
 *  inorder -> right
 * 
 * Preorder traversal is when current value is pushed to arrray first 
 *  push current value into array
 *  Preorder -> left
 *  Preorder -> right
 * 
 * Postorder traversal is when current value is pushed to arrray last 
 *  Postorder -> left
 *  Postorder -> right
 *  push current value into array
 */



function inOrderTraverse(tree, array) {
  // Write your code here.
	if (tree === null) return;
	inOrderTraverse(tree.left, array);
	array.push(tree.value);
	inOrderTraverse(tree.right, array);
	return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
	if (tree === null) return;
	array.push(tree.value);
	preOrderTraverse(tree.left, array)
	preOrderTraverse(tree.right, array)
	return array;
}

function postOrderTraverse(tree, array) {
	if (tree === null) return ;
  // Write your code here.
	postOrderTraverse(tree.left, array);
	postOrderTraverse(tree.right, array);
	array.push(tree.value);
	return array;
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
