// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
     if(this.head === null){
              this.head = node;
              this.tail = node;
          }else {
              this.insertBefore(this.head, node)
          }
    }
  
    setTail(node) {
      // Write your code here.
          if(this.tail === null){
              this.setHead(node)
              return;
          }
          this.insertAfter(this.tail, node)
    }
  
    insertBefore(node, nodeToInsert) {
      // Write your code here.
          if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
          // remove item to move to next part of list
          this.remove(nodeToInsert);
          //  insert by assigning curr node prev to insert node prev
          // and node to insert next node to node 
          nodeToInsert.prev = node.prev;
          nodeToInsert.next= node;
          // if prev is null then node is the current head, fix that
          if(node.prev === null){
              this.head = nodeToInsert 
          }else{
              // otherwise set node.prev next node to node to insert
              node.prev.next = nodeToInsert;
          }
          // update the node.prev to node to insert 
          node.prev = nodeToInsert
    }
  
    insertAfter(node, nodeToInsert) {
      // Write your code here.
          if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
          //  insert by assigning curr node prev to insert node prev
          this.remove(nodeToInsert);
          // and node to insert next node to node 
          nodeToInsert.prev = node;
          nodeToInsert.next= node.next;
          // if prev is null then node is the current head, fix that
          if(node.next === null){
              this.tail = nodeToInsert 
          }else{
              // otherwise set node.prev next node to node to insert
              node.next.prev = nodeToInsert;
          }
          // update the node.prev to node to insert 
          node.next = nodeToInsert
    }
  
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
          if(position === 1){
              this.setHead(nodeToInsert);
              return;
          }
          let node = this.head;
          let currentPosition = 1;
          while(node !== null  && currentPosition++ !== position  ){
              node = node.next
          }
          if( node !== null){
                  this.insertBefore(node, nodeToInsert)
              } else {
                  this.setTail(nodeToInsert)
              }
    }
  
    removeNodesWithValue(value) {
      // Write your code here.
          let node = this.head;
          while(node !== null ){
              const nodeToRemove = node;
              node = node.next;
              if( nodeToRemove.value === value){
                  this.remove(nodeToRemove)
              }
          }
    }
  
    remove(node) {
      // Write your code here.
          if(node === this.head) this.head = this.head.next;
          if(node === this.tail) this.tail = this.tail.prev;
          this.removeBindings(node)
    }
  
    containsNodeWithValue(value) {
      // Write your code here.
          let currNode = this.head;
          while(currNode !== null && currNode.value !== value){
              currNode = currNode.next;
          }
          return currNode !== null;
    }
      removeBindings(node){
          if(node.prev !== null) node.prev.next = node.next;
          if(node.next !== null) node.next.prev = node.prev;
          node.prev = null;
          node.next = null;
      }
  }
  
  // Do not edit the lines below.
  exports.Node = Node;
  exports.DoublyLinkedList = DoublyLinkedList;
  