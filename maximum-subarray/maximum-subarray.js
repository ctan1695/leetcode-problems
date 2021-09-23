/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        currSum += currNum;
        
        if (currSum < currNum) {
            currSum = currNum;
        }

        maxSum = Math.max(maxSum, currSum);

    }

    return maxSum;
};
