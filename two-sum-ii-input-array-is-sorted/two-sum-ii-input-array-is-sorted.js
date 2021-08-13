/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let result = [];
    
    if (numbers.length === 0) {
        return numbers;
    }
    
    for (let i = 0; i < numbers.length; i++) {
        let currNumber = numbers[i];
        let min = i;
        let max = numbers.length - 1;
        let guess;
        
        result.push(i + 1);
        
        while (min <= max) {
            guess = Math.floor((min + max)/2);
            
            if (currNumber + numbers[guess] === target && guess + 1 !== result[0]) {
                result.push(guess + 1);
                return result;
            } else {
                
                if (currNumber + numbers[guess] > target) {
                    max = guess - 1;
                } else {
                    min = guess + 1;
                }
            }
        }
        result.pop();
    }
}
