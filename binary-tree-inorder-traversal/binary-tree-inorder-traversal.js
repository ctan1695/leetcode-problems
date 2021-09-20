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
var inorderTraversal = function(root) {
    let stack = [];
    let output = [];
    let curr = root;
    
    while (root) {
        while (curr !== null) {           
            stack.push(curr);    
            
            curr = curr.left;
        }
        
        let popped = stack.pop();
        output.push(popped.val);
        curr = popped.right;
        
        if (!curr && stack.length === 0) {
            break;
        }
    }
    
    return output;
};


/*
    let result = [];
    
    let traverse = (rootNode) => {
        
        if (rootNode === null) {
            return;
        }
        
        traverse(rootNode.left);
        result.push(rootNode.val);
        traverse(rootNode.right);
    }
    
    traverse(root);
    
    return result;
*/