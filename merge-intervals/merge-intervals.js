/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

   intervals.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else {
            return 1;
        }
    })

    let result = [];


    for (let i = 0; i < intervals.length; i++) {
        let min = intervals[i][0];
        let max = intervals[i][1];

        while (intervals[i] && intervals[i + 1] && intervals[i + 1][0] <= max) {
            max = Math.max(max, intervals[i + 1][1]);
            
            i++;
        }

        result.push([min, max]);        
    }

    return result;
};
