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
    let maxCount = 0;
    
    let drillDown = (rootNode, counter) => {
        if (!rootNode || rootNode.val === null) {
            if (maxCount < counter) {
                maxCount = counter;
            }
            counter = 0;
            return;
        }
    

        counter++;    

        drillDown(rootNode.left, counter);

        drillDown(rootNode.right, counter);            

    }
    
    drillDown(root, 0);
    
    return maxCount;
} 