	public static void levelOrder(Node root) {
        int idx;
        int h = heightHelper(root);
        for (idx = 1; idx <= h; idx++){
            printCurrLevel(root, idx);
        };
        return;
    }
    
    private static void printCurrLevel(Node root, int level){
        if (root == null) return;
        if(level == 1 ){
            System.out.printf("%d ", root.data );
        }else if(level > 1 ) {
            printCurrLevel(root.left, level - 1);
            printCurrLevel(root.right, level - 1);
        }
        return;
    }
    
    private static int heightHelper(Node root) {
        // Write your code here.
        if(root == null){
            return 0;
        }; 
        int lftHeight = heightHelper(root.left);
        int rightHeight = heightHelper(root.right);
        return Math.max(lftHeight, rightHeight) + 1;
    }
