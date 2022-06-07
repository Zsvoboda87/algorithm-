// Write code to return the largest number in the given array

var maxNum = function (arr) {
    arr.sort(function (a, b) { return a - b })
    let l = arr.length - 1
    return arr[l]
};
