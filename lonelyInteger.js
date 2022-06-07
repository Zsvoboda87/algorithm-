function lonelyinteger(a) {
    // Write your code here
    let charMap = {};

    for (var i = 0; i < a.length; i++) {
        let num = a[i]
        if (charMap[num]) {
            charMap[num]--
        } else {
            charMap[num] = 1
        }
    }

    for (var char in charMap) {
        if (charMap[char] === 1) {
            return char
        }
    }

}