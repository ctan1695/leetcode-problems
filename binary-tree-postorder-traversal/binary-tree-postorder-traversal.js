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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];
    
    let traverse = (rootNode) => {
        if (rootNode.left) {
            traverse(rootNode.left);
        };        
        
        if (rootNode.right) {
            traverse(rootNode.right);
        }
        
        result.push(rootNode.val);
    }
    
    if (root) {
        traverse(root);       
    }    
    
    return result;
};