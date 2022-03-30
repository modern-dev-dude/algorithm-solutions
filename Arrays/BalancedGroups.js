// window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 3000;
/**
 * Find the sum of imbalanced groups
 *
 * [4,1,2,3]
 *
 * [1]
 * [2]
 * [3]
 * [4]
 * [4, 1] -> [1, 4] -> sorted 4 - 1 > 1 = ++
 * [1, 2] -> [1, 2] -> 2 - 1  == 1 = +0
 * [2, 3] -> [2, 3] -> 3 - 1  > 1 = +1
 * [4,1,2] -> [1,2,4] 1-2-4 < 1 = +0
 * [1,2,3] -> [1,2,3] 1-2-4 < 1 = +0
 */

 function findImbalance(arrToTest) {
  const inputHtml = htmlBuilder("h3", arrToTest.join());
  let sumOfImbalance = 0;
  document.getElementById("testInput").innerHTML = inputHtml;
  // typically I'd write
  //if (arrToTest.length === 1 || arrToTest.length === 0) return 0
  // but htis si for the pen to display properly
  if (arrToTest.length === 1 || arrToTest.length === 0) {
    const returnValHtml = htmlBuilder("h3", sumOfImbalance);
    document.getElementById("imbalanceSum").innerHTML = returnValHtml;
    return sumOfImbalance;
  }
  // check each item once -> doesnt matter no imbalance
  // build matrix of groups
  // cheack each item once
  //increment matrix size
  // matrix size 2
  // index 0 until i < init arr length create array and order
  // push to matrix
  //iterate again
  // rinse wash repeat
  // keep trackl of imbalance
  const possibleSubArrays = arrToTest.length - 1;
  let subArrSize = 1;
  while (subArrSize <= possibleSubArrays) {
    //build matrix arr
    const matrixToLookForImbalances = buildSubArrayAndSort(
      arrToTest,
      subArrSize
    );
    for (let i = 0; i < matrixToLookForImbalances.length; i++) {
      let currSum = 0;
      for (let k = subArrSize; k >= 0; k--) {
        if (k === subArrSize) {
          currSum = matrixToLookForImbalances[i][k];
        } else {
          currSum = currSum - matrixToLookForImbalances[i][k];
        }
      }
      if (currSum > 1) {
        sumOfImbalance++;
      }
      currSum = 0;
    }
    subArrSize++;
  }
  const returnValHtml = htmlBuilder("h3", sumOfImbalance);
  document.getElementById("imbalanceSum").innerHTML = returnValHtml;
  return sumOfImbalance;
}

/**
 *
 * @param {Array} currArr
 * @param {number} lengthOfSubToBuild
 * @returns {Array<any>}
 *
 * accepts an array and returns a matrix of psible groups
 */
function buildSubArrayAndSort(currArr, lengthOfSubToBuild) {
  const matrixToReturn = new Array();
  for (let i = 0; i < currArr.length - 1; i++) {
    let subArrToFill = new Array();
    let k = i;
    // skip last iteration to avoid undefined value
    while (k <= lengthOfSubToBuild && lengthOfSubToBuild < currArr.length) {
      subArrToFill.push(currArr[k]);
      k++;
    }
    lengthOfSubToBuild++;
    // sort arr per instructions
    subArrToFill.sort((a, b) => a - b);
    if (subArrToFill.length > 0) {
      matrixToReturn.push(subArrToFill);
    }
  }
  return matrixToReturn;
}
/**
 *
 * @param {string} elementType
 * @param {string} value
 * @returns {string}
 *
 * send html type i.e. h1,h3,p
 * send value as a text
 * returns simple HTML string
 */
function htmlBuilder(elementType, value) {
  return `<${elementType}>${value}</${elementType}>`;
}

let testOne = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
let testTwo = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
let testThree = [4, 1, 2, 3];
let testFour = [3, 1, 5];
let testFive = [1];
let testSix = [];
// findImbalance(testOne);
// findImbalance(testTwo);
// findImbalance(testThree);
// findImbalance(testFour);
// findImbalance(testFive);
// findImbalance(testSix);
