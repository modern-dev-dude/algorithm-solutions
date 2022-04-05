class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // time complexity O(BST max hight) AE says  O(log n)
  export function findClosestValueInBst(tree:any, target: number) {
       let currTreeNode = tree;
      let currClosest = tree.value;
      while(currTreeNode !== null){
          if(Math.abs(target - currClosest) > Math.abs(target - currTreeNode.value)){
              currClosest = currTreeNode.value;
          }
          if(target < currTreeNode.value  ){
              currTreeNode = currTreeNode.left ;
          }else if(target > currTreeNode.value ){
              currTreeNode = currTreeNode.right ;
          } else {
              break;
          }
      }
      return currClosest;
  }
  
  
// Recursive implementation 
export function findClosestValueInBstOp2(tree: BST , target: number) {
    // Write your code here.
      return findCurrClosestWrapper(tree, target, tree.value);
      
  }
  
  function findCurrClosestWrapper(tree: BST | null, target: number, closest:number): number{
      if(tree === null ) return closest;
      if(Math.abs(target - closest) > Math.abs(target - tree.value)){
          closest = tree.value;
      }
      if(target < tree.value){
          return findCurrClosestWrapper(tree.left, target, closest);
      }else if(target > tree.value){
          return findCurrClosestWrapper(tree.right, target, closest);
      }else{
          return closest;
      }
  }
        