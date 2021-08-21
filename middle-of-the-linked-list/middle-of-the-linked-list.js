/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let currentNode = head;
    let allValues = [];
    
    if (!head) {
        return undefined;
    }
    
    while(currentNode) {
        allValues.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    let middleIndex = Math.ceil((allValues.length - 1)/2);
    let count = 0;
    currentNode = head;
    
    while (count < middleIndex) {
        count++;
        currentNode = currentNode.next;
    }
    
    return currentNode;
};