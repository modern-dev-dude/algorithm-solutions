/**
 * Kadane's Algorithm from Algo Expert
 * find greatest subaray that sums a target
 * max sum = curr sum + curr idx OR value at curr index
 * Set start idx if the current val i > the summed value
 * 
 * Time O(n)
 * Space O(1)
 * 
 * Psudo code
 * input 
 * [3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]
 * check smallest sub array 
 * [3]
 * [3,5] max(3+5, num[i]) 8 
 * [3,5,-9] = max(8-9, num[i]) = -1
 * [1] ->= max(-1+1, num[i]) = 1
 * [1,3] ->= max(1+2 , num[i]) = 4
 * [1,3,-2] ->= max(4-2 , num[i]) = 2
 * [1,3,-2,3] ->= max(2+3, num[i]) = 5
 * [1,3,-2,3,4] ->= max(5+4, num[i]) = 9
 * [1,3,-2,3,4,7] ->= max(9+7, num[i]) = 16
 * [1,3,-2,3,4,7,2] ->= max(16+2, num[i]) = 18
 * [1,3,-2,3,4,7,2,-9] ->= max(18-9, num[i]) = 9
 * [1,3,-2,3,4,7,2,-9,6] ->= max(9+6, num[i]) = 15
 * [1,3,-2,3,4,7,2,-9,6,3] ->= max(15+3, num[i]) = 18
 * [1,3,-2,3,4,7,2,-9,6,3,1] ->= max(15+3 , num[i]) = 19 // curr Solution
 * [1,3,-2,3,4,7,2,-9,6,3,1,-5] ->= max(19-5 , num[i]) = 14
 * [1,3,-2,3,4,7,2,-9,6,3,1,-5,4] ->= max(14+4 , num[i]) = 18
 */


function kandaneAlgo(arr){
  let maxEnding =arr[0];
  let maxSoFar = arr[0];
  // no need to look at the index 0 because they are already initialized above
  for(let i = 1; i < arr.length; i++){
    maxEnding = Math.max(arr[i], maxEnding + arr[i]);
    // update after the line above
    maxSoFar = Math.max(maxSoFar,maxEnding);
  }
  return maxSoFar
}

/**
 * Using shift and for of
 */
 function kadanesAlgorithm(array) {
  // Write your code here.
	let maxEndingHere =array[0];
  let maxSoFar = array[0];
	array.shift()
  for(let num of array){
    maxEndingHere = Math.max(num, maxEndingHere + num);
    // update after the line above
    maxSoFar = Math.max(maxSoFar,maxEndingHere);
  }
  return maxSoFar
}

//using arrMethod
function kadanesAlgorithm(array) {
  // Write your code here.
	let maxEndingHere =array[0];
  let maxSoFar = array[0];
 	array.forEach((num , idx)=> {
		if(idx === 0 ) return;
		maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar,maxEndingHere);
	})
  return maxSoFar
}