const multiplyInto20 = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let num1 = 20 / arr[i]
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] === num1) {
                return true
            }
        }
    }
    return false

};

// const multiplyInto20 = function(arr) {
//     const numMap = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       let currentNum = arr[i];
  
//       let neededNumber = 20 / currentNum;
  
//       if (numMap[neededNumber]) {
//         return true;
//       }
//       numMap[currentNum] = true;
//     }
  
//     return false;
//   };
