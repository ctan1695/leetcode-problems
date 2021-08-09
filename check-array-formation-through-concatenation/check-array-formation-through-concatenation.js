/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    for (var a = 0; a < arr.length; a++) {
        var broke = false;
        for (var p = 0; p < pieces.length; p++) {
            if (broke) {
                break;
            }
            
            if (pieces[p].includes(arr[a])) {
                var pElement = pieces[p].slice(); //[2, 3]
                var currentArrPosition = a;
                while (pElement.length > 0) {
                    if (pElement[0] !== arr[currentArrPosition]) {
                        return false;
                    }
                    pElement.shift();
                    if (currentArrPosition === arr.length - 1) {
                        return true;
                    } else if (pElement.length === 0) {
                      a = currentArrPosition;
                      broke = true;
                      break;
                    } else {
                        currentArrPosition++;   
                    }                               
                }
            }            
            else if (!pieces[p].includes(arr[a]) && p === pieces.length - 1) {
                return false;
            }
        }
    }   
};