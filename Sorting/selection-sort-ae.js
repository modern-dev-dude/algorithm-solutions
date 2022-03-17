/**
* Time O(n^2) 
* Space O(1) 
*/
function selectionSort(array) {
  // Write your code here.
	for(let i =0; i < array.length; i++){
		let currSmallestIdx = i
		for(let k =i; k < array.length; k++){
			if(array[currSmallestIdx] > array[k]){
				currSmallestIdx = k;
			}
		}
		let temItemAti= array[i];
		array[i] = array[currSmallestIdx];
		array[currSmallestIdx] = temItemAti;
	}
  return array;
}
