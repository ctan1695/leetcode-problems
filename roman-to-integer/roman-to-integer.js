/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0;
    var glossary = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    for (var i = 0; i < s.length; i++) {
        if (i + 1) {
          var pair = s[i] + s[i + 1];
          var value = glossary[pair];
          if (value) {
            result += value;
            i++;                
          } else {
          value = glossary[s[i]];
          result += value;
          } 
        }
    }
    return result;
};