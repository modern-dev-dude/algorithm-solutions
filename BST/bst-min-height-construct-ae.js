
/**
 * 
 * @param {*} array 
 * @returns {BST}
 * 
 * time O(N)
 * space O(N)
 */
 function minHeightBst(array){
  return buildMinHeightBst(array, null, 0, array.length - 1);
}

function buildMinHeightBst(array, bstToReturn, stIdx,edIdx ){
  // base case
  // when this hits the current end item is returns 
  // 1 
  // 2 l: 1 R:5 -> R7
  // 10 -> L2 l: 1 R:5 -> R7 
  if(stIdx > edIdx){
    return;
  }
  const currMid = Math.floor((stIdx + edIdx) / 2);
  const currArrVal = array[currMid];
  const nodeToAdd = new BST(currArrVal);
  if(bstToReturn === null){
    bstToReturn = nodeToAdd
  }else {
    if(currArrVal < bstToReturn.value){
      bstToReturn.left = nodeToAdd;
      // even though it is overwritten here  and 36
      bstToReturn = bstToReturn.left;
    }else {
      bstToReturn.right = nodeToAdd;
      bstToReturn = bstToReturn.right;
    }
  }
  // recursion keeps overwriting the input not the actual variable

  buildMinHeightBst(array, bstToReturn, stIdx, currMid - 1);
  buildMinHeightBst(array, bstToReturn, currMid + 1, edIdx);
  //  returns the curr built BST from bottom up
  return bstToReturn;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;

/**
 * Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: null,
  stIdx: 0,
  edIdx: 8,
  currMid: 4,
  currArrVal: 10
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 10, left: null, right: null },
  stIdx: 0,
  edIdx: 3,
  currMid: 1,
  currArrVal: 2
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 2, left: null, right: null },
  stIdx: 0,
  edIdx: 0,
  currMid: 0,
  currArrVal: 1
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 1, left: null, right: null },
  stIdx: 0,
  edIdx: -1,
  currMid: -1,
  currArrVal: undefined
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 1, left: null, right: null },
  stIdx: 1,
  edIdx: 0,
  currMid: 0,
  currArrVal: 1
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
Trace: {
  array: [
    1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST {
    value: 2,
    left: BST { value: 1, left: null, right: null },
    right: null
  },
  stIdx: 2,
  edIdx: 3,
  currMid: 2,
  currArrVal: 5
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 5, left: null, right: null },
  stIdx: 2,
  edIdx: 1,
  currMid: 1,
  currArrVal: 2
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 5, left: null, right: null },
  stIdx: 3,
  edIdx: 3,
  currMid: 3,
  currArrVal: 7
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 7, left: null, right: null },
  stIdx: 3,
  edIdx: 2,
  currMid: 2,
  currArrVal: 5
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 7, left: null, right: null },
  stIdx: 4,
  edIdx: 3,
  currMid: 3,
  currArrVal: 7
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST {
    value: 10,
    left: BST { value: 2, left: [BST], right: [BST] },
    right: null
  },
  stIdx: 5,
  edIdx: 8,
  currMid: 6,
  currArrVal: 14
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 14, left: null, right: null },
  stIdx: 5,
  edIdx: 5,
  currMid: 5,
  currArrVal: 13
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 13, left: null, right: null },
  stIdx: 5,
  edIdx: 4,
  currMid: 4,
  currArrVal: 10
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 13, left: null, right: null },
  stIdx: 6,
  edIdx: 5,
  currMid: 5,
  currArrVal: 13
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST {
    value: 14,
    left: BST { value: 13, left: null, right: null },
    right: null
  },
  stIdx: 7,
  edIdx: 8,
  currMid: 7,
  currArrVal: 15
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 15, left: null, right: null },
  stIdx: 7,
  edIdx: 6,
  currMid: 6,
  currArrVal: 14
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 15, left: null, right: null },
  stIdx: 8,
  edIdx: 8,
  currMid: 8,
  currArrVal: 22
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 22, left: null, right: null },
  stIdx: 8,
  edIdx: 7,
  currMid: 7,
  currArrVal: 15
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:28:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
Trace: {
  array: [
     1,  2,  5,  7, 10,
    13, 14, 15, 22
  ],
  bstToReturn: BST { value: 22, left: null, right: null },
  stIdx: 9,
  edIdx: 8,
  currMid: 8,
  currArrVal: 22
}
    at buildMinHeightBst (/tester/program.js:8:10)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at buildMinHeightBst (/tester/program.js:29:3)
    at Object.minHeightBst (/tester/program.js:2:10)
    at Object.exports.getActual (/tester/json_wrapper.js:29:24)
    at runSingle (/tester/main.js:27:28)
    at main (/tester/main.js:49:20)
    at Object.<anonymous> (/tester/main.js:57:17)
 */
