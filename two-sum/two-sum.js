/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indOne;
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (result.length !== 2) {
            let indOne = i;
            let numOne = nums[i];

            for (let t = 0; t < nums.length; t++) {
                if (i !== t) {
                    let indTwo = t;
                    let numTwo = nums[t];
                    if (numOne + numTwo === target) {
                        result.push(indOne);
                        result.push(indTwo);
                        break;
                    }
                }
            }            
        }
    }
    
    return result;
};