/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time O(n)
 * Space O(N)
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const bstHeight = getBstHeightHelper(root);
    const res = [];
    for (let idx = 1; idx <= bstHeight; idx++){
       res.push( printCurrLevel(root, idx, []));
    };
    return res;
};


function printCurrLevel(root, level , acc){
    if (root == null) return acc;
    if(level == 1 ){
        acc.push(root.val);
    }else if(level > 1 ) {
        printCurrLevel(root.left, level - 1, acc);
        printCurrLevel(root.right, level - 1, acc);
    }
    return acc;
}
    
function getBstHeightHelper(rootNode){
    if(rootNode == null){
        return 0;
    }; 
    const lftHeight = getBstHeightHelper(rootNode.left);
    const rightHeight = getBstHeightHelper(rootNode.right);
    return Math.max(lftHeight, rightHeight) + 1;
}