/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let glossary = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    let result = 0;
    let split = s.split('');
    
    for (let i = 0; i < split.length; i++) {
        if ((split[i] === "I" && (split[i + 1] === "V" || split[i + 1] === "X")
            || (split[i] === "X" && (split[i + 1] === "L" || split[i + 1] === "C"))
            || (split[i] === "C" && (split[i + 1] === "D" || split[i + 1] == "M")))) {
            result -= glossary[split[i]];
        } else {
            result += glossary[split[i]];
        }
            
    }
    
    return result;
};