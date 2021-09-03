/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pointerOne = 0;
    let pointerTwo = nums.length - 1;
    
    while (pointerOne <= pointerTwo) {       
        if (nums[pointerOne] === val) {
            nums[pointerOne] = nums[pointerTwo];
            nums[pointerTwo] = null;
            pointerTwo--;
        } else {
            pointerOne++;
        }
    }
    
    return pointerOne;
};
