/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let result = new dfsWrapper();
  return result.addSumFromRange(root, low, high);
};

class dfsWrapper {
  sum;
  addSumFromRange(root, low, high) {
    this.sum = 0;
    this.dfs(root, low, high);
    return this.sum;
  }

  dfs(root, low, high) {
    if (root === null) {
      return;
    }
    if (root.val <= high && root.val >= low) {
      this.sum += root.val;
    }
    if (root.val >= low) {
      this.dfs(root.left, low, high);
    }
    if (root.val <= high) {
      this.dfs(root.right, low, high);
    }
  }
}

/**
 * OR
 * Time O(n)
 * Space O(n)
 */
var rangeSumBST = function (root, low, high) {
  if (root === null) {
    return 0;
  }
  let sum = root.val;
  if (sum < low || sum > high) {
    sum = 0;
  }
  sum += rangeSumBST(root.left, low, high);
  sum += rangeSumBST(root.right, low, high);
  return sum;
};
