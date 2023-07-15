var fs = require('fs');
var input = fs.readFileSync('2022/Day 6/input.txt').toString();

// Solution for Part One

// Updated "start" and "count" variables to 14 to solve for part two.

// The variable "start" keeps track of the number of characters processed.

let start = 14;

function buffer(input) {

    // The first loop sets the marker (four characters) to check with each iteration.

    for (let i = 0; i < input.length; i++) {

        let count = 0;
        let marker = "";

        while (count < 14) {

            marker += input[i + count];
            count++;

        }

        let passes = true;

        // The second loop checks for duplicate characters within the marker, if one is found "passes" is set to false and the loop is broken.

        for (let j = 0; j < marker.length; j++) {

            let character = marker[j];
            let testMarker = marker.replace(character, "");

            if (testMarker.includes(character)) {

                passes = false;
                break;

            }

            testMarker = marker;

        }

        if (passes === true) {

            return start;

        }

        start++;

    }

}

console.log(buffer(input));