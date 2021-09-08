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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null || root.val === null) {
        return [];
    }
    
    let result = [];
    
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        
        let length = queue.length;
        let level = [];
        
        for (let i = 0; i < length; i++) {
            let curr = queue.shift();
            if (curr) {
                level.push(curr.val);
                queue.push(curr.left);
                queue.push(curr.right);
            }
        }
        
        if (level.length > 0) {
            result.push(level);               
        }        
    }
    
    return result;
};