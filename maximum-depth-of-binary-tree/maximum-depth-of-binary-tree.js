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
 * @return {number}
 */
let maxDepth = (root) => {
    let queue = [];
    let numNodes = 0;
    let height = 0;
    
    if (root) {
        queue.push(root);    
    } else {
        return height;
    }
    
    while (queue.length > 0) {
        numNodes = queue.length;
        
        if (numNodes === 0) {
            return height;
        }
        
        height++;
        
        while (numNodes > 0) {
            let curr = queue.shift();
            
            if (curr.left) {
                queue.push(curr.left);
            }
            
            if (curr.right) {
                queue.push(curr.right);
            }
            
            numNodes--;
        }
    }
    
    return height;
}