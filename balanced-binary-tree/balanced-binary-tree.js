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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let allNodes = [];
    allNodes.push(root);
    
    if (!root) {
        return true;
    }

    let findDepth = (rootNode) => {
        if (!rootNode) {
            return 0;
        }
        
        let leftDepth = findDepth(rootNode.left);
        let rightDepth = findDepth(rootNode.right);
        
        return Math.max(leftDepth + 1, rightDepth + 1);
    }    
    
    while (allNodes.length > 0) {
        let popped = allNodes.pop();
        let depthLeft = findDepth(popped.left);   
        let depthRight = findDepth(popped.right);
        
        if (Math.abs(depthLeft - depthRight) > 1) {
            return false;
        }
        
        if (popped.left) {
            allNodes.push(popped.left);
        }
        
        if (popped.right) {
            allNodes.push(popped.right);
        }
    }
    
    return true;
};