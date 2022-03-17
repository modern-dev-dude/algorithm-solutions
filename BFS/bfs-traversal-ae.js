// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
	// Time O(V+E)
	// Space O(V)
  breadthFirstSearch(array) {
    // Write your code here.
    // load que with curr BST 
		let queue = [this];
    // while queue is not empty 
    // pop last item 
    // push the node name/val to the array
    // add all children to que
    // in JS use unshift to ensure each element is added to the front of queue 
		while(queue.length > 0 ){
			let currentNode = queue.pop();
			array.push(currentNode.name)
			for(let child of currentNode.children){
				queue.unshift(child)
			}
		}
		return array
  }
}

/**
 * Algo Experts implementation
 * 
 * 
*/ 
 
 function breadthFirstSearch(array) {
    // Write your code here.
    // load que with curr BST 
		let queue = [this];
    // while queue is not empty 
    // pop last item 
    // push the node name/val to the array
    // add all children to que
    // in JS use unshift to ensure each element is added to the front of queue 
		while(queue.length > 0 ){
      // .shift removes the first node instead of the last like .pop 
			let currentNode = queue.shift();
			array.push(currentNode.name)
			for(let child of currentNode.children){
        // .push allows to be in order due to the .shift above 
				queue.push(child)
			}
		}
		return array
  }

// Do not edit the line below.
exports.Node = Node;
// data struckture queue 
// first in first out 
// unshift to add pop to remove 