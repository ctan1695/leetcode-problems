
 // Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;
    
    while (curr && curr.next) {
        let nextNextNode = curr.next.next;
        let nextNode = curr.next;
        
        nextNode.next = curr;
        curr.next = nextNextNode;
        prev.next = nextNode;
        
        prev = curr;
        curr = nextNextNode;
    }
    
    return dummy.next;
};
