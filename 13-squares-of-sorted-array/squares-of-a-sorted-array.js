// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function (arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        newArray.push(num * num)
    }
    return newArray.sort(function (a, b) { return a - b })
};


