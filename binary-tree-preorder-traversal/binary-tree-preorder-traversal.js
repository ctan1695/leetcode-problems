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
var preorderTraversal = function(root) {
    let stack = [];
    let result = [];
    stack.push(root);
    
    while (stack.length > 0 && root) {
        let curr = stack.pop();
        result.push(curr.val);       

        if (curr.right) {
          stack.push(curr.right);
        }

        if (curr.left) {
            stack.push(curr.left);
        }        
                
    }
    
    return result;
};
