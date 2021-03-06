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
        let queue = [];
        let nodesPerLevel = 0;
        let depth = 0;
        
        if (rootNode) {
            queue.push(rootNode);    
        } else {
            return depth;   
        }
        
        while (queue.length > 0) {
            nodesPerLevel = queue.length;
            
            if (nodesPerLevel === 0) {
                return depth;
            } 
            
            depth++;
            
            while (nodesPerLevel > 0) {
                let curr = queue.shift();
                
                if (curr.left) {
                    queue.push(curr.left);
                }
                
                if (curr.right) {
                    queue.push(curr.right);
                }
                
                nodesPerLevel--;
            }
        }
        
        return depth;
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