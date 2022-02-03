/**
 * Check both right and left sides of array 
 * loop through and count num items smaller than
 * if the left and right idx are equal assign left due to left < i logic
 * 
 */
function rightSmallerThan(array) {
  // Write your code here.
let left = 0;
let right = array.length - 1;
let resArr = [];
	while(left <= right){
		let currLeftCount = 0;
		let currRightCount = 0;
		//iterate through array 
		for(let i =0; i < array.length; i++){
			if(i > left){
				if(array[left] > array[i] ){
					currLeftCount++;
				}
			}
			if(i > right){
				if(array[right] > array[i]){
					currRightCount++;
				}
			}
		}
		resArr[left] = currLeftCount;
		resArr[right] = left === right ? currLeftCount : currRightCount;
		left++;
		right--;
	}
	return resArr
}

// Do not edit the line below.
exports.rightSmallerThan = rightSmallerThan;
