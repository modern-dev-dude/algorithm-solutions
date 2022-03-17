/**
* Time O(n^2) 
* Space O(1) 
*/
function insertionSort(array) {
  // Write your code here.
	for(let i =0; i < array.length; i++){
		if(i === 0) continue;
		let currIdxOfItemToSort = i;
		while(count > 0){
			if(array[count] < array[count-1]){
				const templeft = array[count - 1];
				array[count-1] = array[count];
				array[count] = templeft;
			}
			count--;
		}
	}
	return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
