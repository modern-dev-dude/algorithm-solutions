/**
 * Time O(n)
 * Space O(1)
 */
function getHeight(root) {
    return  getBstHeightHelper(root) - 1;
}
    
function getBstHeightHelper(rootNode){
    // Write your code here.
    if(rootNode == null){
        return 0;
    }; 
    const lftHeight = getBstHeightHelper(rootNode.left);
    const rightHeight = getBstHeightHelper(rootNode.right);
    return Math.max(lftHeight, rightHeight) + 1;
}