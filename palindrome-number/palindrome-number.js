/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var splitInteger = x.toString().split('');
    var reversed = '';
    
    for (var i = splitInteger.length - 1; i >= 0; i--) {
        reversed += splitInteger[i];
    }
    if (x === parseInt(reversed)) {
        return true;
    } else {
        return false;
    }
};
