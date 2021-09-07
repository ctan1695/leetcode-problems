/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    })
    
    nums2.sort((a, b) => {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    })    
    
    let i = 0;
    let j = 0;
    let result = [];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            if (!result.includes(nums1[i])) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        }
    }   
    
    return result;
};