/**
* Bucket Sort
* Time O(n)
* Space O(1)
*/

function threeNumberSort(array, order) {
  // Write your code here.
	let firstIdx = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i] === order[0]){
			swapItemnArray(array, i, firstIdx)
			firstIdx++;
		}
	}
	firstIdx = array.length-1;
	for(let i = array.length - 1; i >=0; i--){
		if(array[i] === order[2]){
			swapItemnArray(array, i, firstIdx)
			firstIdx--;
		}
	}
	return array
}

function swapItemnArray(array, idxOne, idxTwo){
	let temp = array[idxOne] ;
	array[idxOne] = array[idxTwo];
	array[idxTwo] = temp;
}
