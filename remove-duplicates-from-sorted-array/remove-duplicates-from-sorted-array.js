/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointerOne = 0;
    let pointerTwo = 1;
    
    while (pointerTwo < nums.length) {
        if (nums[pointerOne] === nums[pointerTwo]) {
            nums[pointerTwo] = null;
            pointerTwo++;
        } else if (nums[pointerTwo] === null || pointerOne + 1 === pointerTwo) {
            pointerOne++;
            pointerTwo++;
        } else {
            let nextPos = nums[pointerOne + 1];
            nums[pointerOne + 1] = nums[pointerTwo];
            nums[pointerTwo] = nextPos;
        }
    }

    return pointerOne + 1;
};