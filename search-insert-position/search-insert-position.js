/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let minIndex = 0;
    let maxIndex = nums.length - 1;
    let guessIndex;
    
    while (true) {
        guessIndex = Math.floor((minIndex + maxIndex)/2);
        
        if (nums[guessIndex] === target) {
            return guessIndex;
        }

        if (minIndex >= maxIndex && nums[guessIndex] !== target) {
            if (target > nums[minIndex]) {
            return minIndex + 1;
            } else {
                return minIndex;
            }
        }        
        
        if (nums[guessIndex] < target) {
            minIndex = guessIndex + 1;
        } else {
            maxIndex = guessIndex - 1;
        }        
    }    
};