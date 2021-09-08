/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [];
    let inserted = false;

    for (let i = 0; i < intervals.length; i++) {
        if (inserted || newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        } else if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            result.push(intervals[i]);
            inserted = true;
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        }      
    }

    if (!inserted) {
        result.push(newInterval);
    }
       
    return result;
};