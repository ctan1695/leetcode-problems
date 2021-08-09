/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var pos = 1;
    var result = strs && strs[0] ? strs[0].slice(0, pos) : '';
    
    for (var i = 0; i < strs.length; i++) {
        var word = strs[i];
        if (word.indexOf(result) !== 0) {
            result = result.slice(0, -1);
            break;
        } else if (i === strs.length - 1 && word !== '' && result !== '' && pos <= strs[0].length) {
            i = 0;
            pos++;
            result = strs[0].slice(0, pos);
        }
    }
    
    return result;
};