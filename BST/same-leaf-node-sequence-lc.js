/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
/**
 * Time O(n log n)
 * Space O(1)
 */
 var leafSimilar = function(root1, root2) {
    let left = buildLeafValsDfs(root1, []);
    let right = buildLeafValsDfs(root2, [])
    if(left.length !== right.length) return false;
    let leftIdx = 0;
    let rightIdx = right.length -1;
    while(leftIdx <= rightIdx){
       if(left[leftIdx] !== right[leftIdx] || left[rightIdx] !== right[rightIdx]){
          return false
        }
        leftIdx++;
        rightIdx--;
    }
    return true;
};

function buildLeafValsDfs(root, array){
    if(root === null) return 
    if (root.left === null &&  root.right === null) {
     array.push(root.val)
    }
    if (root.left !== null) {
      buildLeafValsDfs(root.left, array);
    }
    if (root.rigth !== null) {
      buildLeafValsDfs(root.right, array);
    }
  return array;
} 