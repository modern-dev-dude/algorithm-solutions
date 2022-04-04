/**
 * Time O(n)
 * Space O(N)
 */
 function levelOrder(root) {
    const bstHeight = heightHelper(root);
    for (let idx = 1; idx <= bstHeight; idx++){
        printCurrLevel(root, idx);
    };
}

function printCurrLevel(root, level){
    if (root == null) return;
    if(level == 1 ){
        consolee.log(`${root.data} `);
    }else if(level > 1 ) {
        printCurrLevel(root.left, level - 1);
        printCurrLevel(root.right, level - 1);
    }
    return;
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