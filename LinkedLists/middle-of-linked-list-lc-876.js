/**
 * Problems and solutions from Leetcode
 * Notes made for study purposes
 * Some of the solutions are mine
 */
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
 ListNode.prototype.size= (head) => {
    let nodeCount =0;
    let currNode = head
    while(currNode !== null){
        nodeCount++;
        currNode = currNode.next;
    }
    return nodeCount;
}
var middleNode = function(head) {
    // Space O(n)
    // Time O(n)
    // this implements a prototype to the linked list
    // could also just be a seperate function
    let listSize = head.size(head);
    let midPoint = Math.floor( listSize / 2) + 1;
    let nodeCount=1;
    let currNode = head;
    while(currNode !== null){
        if(nodeCount === midPoint){
            return currNode;
            break;
        }else{
            nodeCount++;
            currNode = currNode.next;
        }
    }

    // Space O(n)
    // Time O(n)
    // If you track one double the speed, then when fast.next === null
    // slow will be the midpoint 
    // need to check fast && fast.next for null for both even and odd list lengths
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};