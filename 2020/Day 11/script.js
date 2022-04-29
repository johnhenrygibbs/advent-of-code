var fs = require('fs');
var input = fs.readFileSync("2020/Day 11/input.txt").toString().split("\n");

// Solution for Part One

let changes = 0;

function boardingGroup(input) {

    let seatingChart = [];

    // A nested loop that iterates through each row of the input data.

    for (let i = 0; i < input.length; i++) {

        let row = "";
        let rowAbove = input[i - 1];
        let presentRow = input[i];
        let rowBelow = input[i + 1];
    
        for (let j = 0; j < presentRow.length; j++) {

            let surroundingSeats = [];
            let seat = presentRow[j];

            // A series of conditionals that checks for undefined edge cases, literally, and pushes surrounding seats to an array accordingly.
    
            if (presentRow[j - 1] != undefined) {
    
                surroundingSeats.push(presentRow[j - 1]);
    
            }
    
            if (presentRow[j + 1] != undefined) {
    
                surroundingSeats.push(presentRow[j + 1]);
    
            }
    
            if (rowAbove != undefined) {
    
                surroundingSeats.push(rowAbove[j]);
    
                if (rowAbove[j - 1] != undefined) {
    
                    surroundingSeats.push(rowAbove[j - 1]);
    
                }
    
                if (rowAbove[j + 1] != undefined) {
    
                    surroundingSeats.push(rowAbove[j + 1]);
    
                }
                
            }
    
            if (rowBelow != undefined) {
    
                surroundingSeats.push(rowBelow[j]);
    
                if (rowBelow[j - 1] != undefined) {
    
                    surroundingSeats.push(rowBelow[j - 1]);
    
                }
    
                if (rowBelow[j + 1] != undefined) {
    
                    surroundingSeats.push(rowBelow[j + 1]);
    
                }
                
            }

            let count = 0;

            // Loops through the surrounding seats looking for occupied hashtag symbols and increments a count.

            for (let k = 0; k < surroundingSeats.length; k++) {

                if (surroundingSeats[k] == '#') {

                    count++;

                }

            }

            // A series of conditionals that follows the rules of the puzzle. If any changes occur, the changes variable is incremented.

            if (seat == 'L' && !surroundingSeats.includes('#')) {

                row += '#';

                changes++;

            } else if (seat == '#' && count >= 4) {

                row += 'L';

                changes++;

            } else if (seat == '.') {

                row += '.';

            } else {

                row += seat;

            }
    
        }

        // The new row is pushed to the seating chart.

        seatingChart.push(row);
    
    }

    return seatingChart;

}

// A function that checks to see if any changes to the seating chart have occurred, rerunning the function until the two seating charts match.

function checkChart(input) {

    let copy = boardingGroup(input);

    while (changes != 0) {

        changes = 0;

        return checkChart(copy);

    }

    // Once no more seats change, a simple loop counts up the number of occupied seats and returns the value.

    let occupiedSeats = 0;

    for (let i = 0; i < copy.length; i++) {
    
        let row = copy[i];
    
        for (let j = 0; j < row.length; j++) {
    
            if (row[j] == '#') {
    
                occupiedSeats++;
    
            }
    
        }
    
    }
    
    return occupiedSeats;

}

console.log(checkChart(input));