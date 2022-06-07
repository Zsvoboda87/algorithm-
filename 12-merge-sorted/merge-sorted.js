// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    let newArray = [...arr1, ...arr2]
    return newArray.sort(function (a, b) { return a - b })

};
