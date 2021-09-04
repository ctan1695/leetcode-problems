/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let getCycleLength = (head) => {
    let movingHead = head; 
    let target = head;
    let count = 0;
    
    while (true) {
        count++;
        movingHead = movingHead.next;
        
        if (movingHead === target) {
            return count;
        }        
    }
    
    return count;
}

let getStartingNode = (head, length) => {
    let pointerOne = head;
    let pointerTwo = head;
    
    while (length > 0) {
        pointerTwo = pointerTwo.next;
        length--;
    }
    
    while (true) {
          
        if (pointerOne === pointerTwo) {
            return pointerOne;
        }
        
        pointerOne = pointerOne.next;
        pointerTwo = pointerTwo.next;
    }
    
    return null;
}

var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let cycleLength = 0;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            cycleLength = getCycleLength(slow);
            return getStartingNode(head, cycleLength);
        }
    }
    
    return null;
    
};
