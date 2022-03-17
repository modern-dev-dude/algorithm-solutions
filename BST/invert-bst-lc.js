/**
 * 
 * Time O(n)
 * Space O(n) 
 * 
 */
var invertTree = function(root) {
  if(root === null) return null
  let tempRoot = root.left;
  root.left = root.right;    
  root.right = tempRoot;
  invertTree(root.left)    
  invertTree(root.right)
  return root
};