/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stringCharacters = s.split('');
    var parens = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    var parenKeys = Object.keys(parens);
    
    if (!parens[stringCharacters[0]] || s.length % 2 !== 0) {
        return false;
    }
    var allOpenings = [];
    allOpenings.push(stringCharacters[0]);
    
    for (var i = 1; i < stringCharacters.length; i++) {
        var currChar = stringCharacters[i];
        var currOpening = allOpenings.slice(-1);

        if (parenKeys.includes(currChar)) {
            allOpenings.push(currChar);
        } else if (parens[currOpening] !== currChar) {
            return false;
        } else {
            allOpenings.pop();
        }
    }

    if (allOpenings.length === 0) {
        return true;
    } else {
        return false;
    }
};