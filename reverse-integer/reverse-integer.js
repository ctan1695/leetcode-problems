/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNeg = x < 0 ? 1 : 0;
    x = Math.abs(x);

    var splitNum = x.toString().split('');
    var result = isNeg ? '-' : '';

    for (var i = splitNum.length - 1; i > -1; i--) {
      result += (splitNum[i]);
    }

    return Math.abs(parseInt(result)) > Math.pow(2, 31) ? 0 : parseInt(result);
};
