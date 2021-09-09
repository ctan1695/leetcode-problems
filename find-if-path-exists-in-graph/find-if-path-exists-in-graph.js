/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    if (n === 1) {
        return true;
    }
    
    let neighbors = createAdjacencyList(edges);
    let queue = [];
    let visited = new Array(n);
    visited.fill(false);
    queue.push(start);
    visited[start] = true;
    
    if (!neighbors[start]) {
        return false;
    }
    
    while (queue.length > 0) {
        let curr = queue.shift();
        if (curr === end) {
            return true;
        }

        for (let t = 0; t < neighbors[curr].length; t++) {

            if (visited[neighbors[curr][t]] === false) {
                queue.push(neighbors[curr][t]);
                visited[neighbors[curr][t]] = true;
            }         
        }        
    }
    
    return false;
};

let createAdjacencyList = (edges) => {
    let list = {};

    for (let i = 0; i < edges.length; i++) {
        if (!list[edges[i][0]]) {
            list[edges[i][0]] = [edges[i][1]];
        } else {
            list[edges[i][0]].push(edges[i][1]);
        }

        
        if (!list[edges[i][1]]) {
            list[edges[i][1]] = [edges[i][0]];
        } else {
            list[edges[i][1]].push(edges[i][0]);
        }
        
    }
    
    return list;
}