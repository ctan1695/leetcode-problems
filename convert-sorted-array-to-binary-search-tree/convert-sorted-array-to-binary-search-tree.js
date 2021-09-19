/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
    let constructBST = (min, max) => {
        if (min > max) {
            return null;
        }
        
        let mid = Math.floor((min + max) / 2);
        let newNode = new TreeNode(nums[mid]);
        
        newNode.left = constructBST(min, mid - 1);
        newNode.right = constructBST(mid + 1, max);
            
        return newNode;
    }

    return constructBST(0, nums.length - 1);
};
