/**
 * @param {string} s
 * @return {boolean}
 */

var cleanString = function(string) {
 var cleanedString = string.toLowerCase().split('');
 let result = '';

 for (var i = 0; i < cleanedString.length; i++) {
     if ((/[a-zA-Z0-9]/).test(cleanedString[i])) {
        result = result.concat(cleanedString[i]);      
     }
 }   
 
 return result;
}

var isPalindrome = function(s) {
    if (!s) {
        return undefined;
    }

    let cleaned = cleanString(s);
    let allLetters = cleaned.split('');

    let forwardIndex = 0;
    let backwardIndex = cleaned.length - 1;

    while (forwardIndex < backwardIndex) {
        if (allLetters[forwardIndex] !== allLetters[backwardIndex]) {
            return false;
        } else {
            forwardIndex++;
            backwardIndex--;
        }
    }

    return true;  
};