/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {  
    let allValues = [];
    let currentNode = head;
    let decimal = 0;
    
    while (currentNode) {
        allValues.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    let power = allValues.length - 1;
    
    for (let i = 0; i < allValues.length; i++) {
        decimal += allValues[i] * Math.pow(2, power);
        power--;
    }
    
    return decimal;
};