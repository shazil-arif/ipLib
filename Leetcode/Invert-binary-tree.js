/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        preOrder(root);
        return root;
        
    }
    
    public void preOrder(TreeNode root){
        if(root != null){
            swapChildNodes(root);
            preOrder(root.left);
            preOrder(root.right);
        }
        return;
    }
    
    public void swapChildNodes(TreeNode parent){
        TreeNode save = parent.left;
        parent.left = parent.right;
        parent.right = save;
    }
}
