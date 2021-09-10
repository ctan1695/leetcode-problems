/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {   
    let uniqueNums = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!uniqueNums.includes(nums[i])) {
            uniqueNums.push(nums[i]);
        }
    }

    return !(uniqueNums.length === nums.length);
};