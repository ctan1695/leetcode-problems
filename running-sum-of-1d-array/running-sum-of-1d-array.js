/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runSum = 0;
    let result = [];
    
    if (!nums || nums.length === 0){
        return result;    
    }
    
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        
        runSum += curr;
        result.push(runSum);
    }
    
    return result;
};
