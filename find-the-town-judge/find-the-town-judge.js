/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) {
        return 1;
    }
    
    let adjacencyList = {};
    let trustedBy = {};
    let judge = -1;
    
    for (let i = 0; i < trust.length; i++) {
        if (!adjacencyList[trust[i][0]]) {
            adjacencyList[trust[i][0]] = [trust[i][1]];
        } else {
            adjacencyList[trust[i][0]].push(trust[i][1]);
        }
        
        if (!adjacencyList[trust[i][1]]) {
            adjacencyList[trust[i][1]] = [];
        }
        
        if (!trustedBy[trust[i][1]]) {
            trustedBy[trust[i][1]] = [trust[i][0]];
        } else {
            trustedBy[trust[i][1]].push(trust[i][0]);
        }
    }
    
    for (let key in adjacencyList) {
        if (adjacencyList[key].length === 0 && trustedBy[key].length === n - 1) {
            judge = parseInt(key);
            break;
        }
    }
    
    return judge;
};
