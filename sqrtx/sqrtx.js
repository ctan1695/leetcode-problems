/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let min = 1;
    let max = x;
    let guess;
    
    while (min <= max) {
        guess = Math.floor((min + max)/2);
        
        if (guess * guess === x) {
            return guess;
        }     
        
        if (guess * guess > x) {
            max = guess - 1;
        } else {
            min = guess + 1;
        }
    }
    
    if (min > max) {
        return max;
    } else {
        return min;
    }
};

