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
 var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
      head = prev;
      return head;
};

var reverseList = function(head) {
    let holderForNodesInReverseOrder = null;
    let current = head;
    let tempForNodesNotReversed = null;
    while (current != null) {
        tempForNodesNotReversed = current.next; //[2,3,4,5,null] // [3,4,5,null]
        // remove all but first node from linked list 
        // by making curr.next=== null on first iteration
        // on every other iteration reassign curr with [curr, ...prev]
        // assigns the revered nodes at the end of curr Linked List
        current.next = holderForNodesInReverseOrder; // [1,null] // [2,1,null] assign prev to the next node making [2,1,null]
        // assign previous to tcurr effectivly adding the next node at the head of the Linked List
        holderForNodesInReverseOrder = current; // [1,null] // [2,1,null]
        current = tempForNodesNotReversed; // [2,3,4,5,null] // [3,4,5]
    }
        head = holderForNodesInReverseOrder;
        return head;
};






