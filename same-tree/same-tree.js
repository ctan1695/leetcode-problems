/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let result = true;
    
    let verify = (rootOne, rootTwo) => {
        if (!result) {
            return result;
        }
        
        if (!rootOne && !rootTwo) {
            return;
        }
        
        if ((rootOne && rootTwo && rootOne.val !== rootTwo.val) || (!rootOne && rootTwo) || (rootOne && !rootTwo)) {
            result = false; 
            return;           
        }       

        if ((rootOne && rootTwo) && (rootOne.val === null || rootOne.val === null)) {
            return;
        }
        
        verify(rootOne.left, rootTwo.left);
        verify(rootOne.right, rootTwo.right);
    }

    verify(p, q);
    
    return result;
};