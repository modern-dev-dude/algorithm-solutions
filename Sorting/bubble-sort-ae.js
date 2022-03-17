export function bubbleSort(array) {
  // Write your code here.
	let isSorted = false;
	let counter =0 ;
	while(!isSorted){
	isSorted = true;
		for(let i = 0; i < array.length - - counter; i++){
			if(array[i] > array[i+1]){
				let temp = array[i];
				array[i] = array[i+ 1];
				array[i + 1] = temp;
				isSorted = false;
			}
		}
		counter++;
	}
  return array;
}
