/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointerOne = m - 1;
    let pointerTwo = n - 1;
    let currentInsertPos = nums1.length - 1;
    
    while (pointerTwo >= 0) {
        if (nums1[pointerOne] > nums2[pointerTwo]) {
            nums1[currentInsertPos] = nums1[pointerOne];
            pointerOne--;
        } else {
            nums1[currentInsertPos] = nums2[pointerTwo];
            pointerTwo--;            
        }
        currentInsertPos--;
    }
};
