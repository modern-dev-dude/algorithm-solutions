	public static int height(Node root) {
        // Write your code here.
        // remove  1 level for the root node considered 0 
        return  heightHelper(root) - 1;
    }
    // performs a post order traversal and returns the max of curr left and right  + 1  
    private static int heightHelper(Node root) {
        // Write your code here.
        if(root == null){
            return 0;
        }; 
        int lftHeight = heightHelper(root.left);
        int rightHeight = heightHelper(root.right);
        return Math.max(lftHeight, rightHeight) + 1;
    }
    