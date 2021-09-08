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
var isSymmetric = function(root) {
    let sideOne = findNodes(root.left, true);
    let sideTwo = findNodes(root.right, false);
    
    console.log('sideOne: ', sideOne);
    console.log('sideTwo: ', sideTwo);
    
    if (JSON.stringify(sideOne) === JSON.stringify(sideTwo)) {
        return true;
    } else {
        return false;
    }
};

let findNodes = (rootNode, leftToRight) => {
    let result = [];
    let queue = [];
    queue.push(rootNode);
    
    while (queue.length > 0) {
        let sub = [];
        let qLen = queue.length;
    
        for (let i = 0; i < qLen; i++) {
            let currentNode = queue.shift();
            if (currentNode) {
              sub.push(currentNode.val);  
              if (leftToRight) {
                queue.push(currentNode.left);
                queue.push(currentNode.right);    
              } else {
                queue.push(currentNode.right);
                queue.push(currentNode.left);   
              }              
            } else {
                sub.push(null);   
            }
        }
        
        if (sub.length > 0) {
            result.push(sub);
        }
    }
    
    return result;
}