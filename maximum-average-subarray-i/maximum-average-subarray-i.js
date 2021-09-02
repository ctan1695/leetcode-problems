/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAverage;
    let windowAverage;
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    windowAverage = windowSum / k;
    maxAverage = windowAverage;
    
    for (let last = k; last < nums.length; last++) {
        windowAverage += (nums[last] - nums[last - k]) / k;
        maxAverage = Math.max(windowAverage, maxAverage);
    }
    
    return maxAverage;
};
