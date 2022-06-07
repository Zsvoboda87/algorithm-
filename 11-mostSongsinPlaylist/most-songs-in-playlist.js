// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
    let sortedArray = arr.sort(function (a, b) { return a - b })
    let songNumber = 0
    let timer = 0

    for (let i = 0; i < arr.length; i++) {
        let songTime = sortedArray[i];
        if (timer + songTime <= 60) {
            timer += songTime
            songNumber++
        }
    }

    return songNumber
};
