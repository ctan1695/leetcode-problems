/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parens = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    let openParens = '';
    
    if (s.length % 2 !== 0) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {        
        let currentChar = s[i];
        
        if (parens[currentChar]) {
            openParens += currentChar;
        } else {
            let lastOpen = openParens[openParens.length - 1];
            if (currentChar !== parens[lastOpen]) {
                return false;
            }
            openParens = openParens.slice(0, openParens.length - 1);
        }
    }
    
    if (openParens === '') {
        return true;    
    } else {
        return false;
    }
    
};
