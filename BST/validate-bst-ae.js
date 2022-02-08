// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
 
  /**
   * 
   * Time O(n) -> every node is touched
   * Space O(d) -> becasue no values are stored but,
   * space is taken on the call stack
   * at max === to the depth of the BST 
   * @returns 
   */

  function validateBst(tree) {
    // Write your code here.
      return traverseBst(tree, -Infinity, Infinity)
  }
  
  // each node must be min val <= node value > max value
  // it seems inverted conditional logic
  // but if the node is to the left i.e. the less than case it is smaller
  // and the <= is the case if the current value is the right node
  function traverseBst(node, minVal, maxVal){
      if(node === null) return true;
      if(node.value < minVal || node.value >= maxVal ) return false;
      const leftNodeIsValid = traverseBst(node.left, minVal, node.value);
      return leftNodeIsValid && traverseBst(node.right, node.value, maxVal)
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;
  