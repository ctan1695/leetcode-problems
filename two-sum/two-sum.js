/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let hashTable = {};
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let diff = target - currentNum;
        
        if (hashTable[diff] !== undefined) {
            result.push(i);
            result.push(hashTable[diff]);
            return result;
        } else {   
            hashTable[currentNum] = i;
        }
    }
    
    return result;
};