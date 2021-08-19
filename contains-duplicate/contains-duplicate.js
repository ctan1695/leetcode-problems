/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {   
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        let remaining = nums.slice(i + 1, nums.length);
        if (remaining.includes(curr)) {
            return true;
        }
    }
    
    return false;
};