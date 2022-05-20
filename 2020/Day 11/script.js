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

// Solution for Part Two

let iterations = 0;

// Basically the same function as part one, except I introduce a "step" variable that walks a path in each of the 8 directions (cardinal and ordinal) looking for the first seat.

function boardingGroupPartTwo(input) {

    let seatingChartPartTwo = [];

    for (let i = 0; i < input.length; i++) {

        let row = "";
        let rowAbove = input[i - 1];
        let presentRow = input[i];
        let rowBelow = input[i + 1];

        for (let j = 0; j < presentRow.length; j++) {

            let visibleSeats = [];
            let seat = presentRow[j];
            let step = 1;

            // Looking west.

            if (presentRow[j - 1] != undefined) {

                while (presentRow[j - step] == '.') {

                    step++;

                }

                visibleSeats.push(presentRow[j - step]);

                step = 1;

            }

            // Looking east.

            if (presentRow[j + 1] != undefined) {

                while (presentRow[j + step] == '.') {

                    step++;

                }

                visibleSeats.push(presentRow[j + step]);

                step = 1;

            }

            // Looking north.

            if (rowAbove != undefined) {

                while (rowAbove[j] == '.') {

                    step++;

                    rowAbove = input[i - step];

                    if (rowAbove == undefined) {

                        rowAbove = input[i - step + 1];

                        step--;

                        break;

                    }

                }

                visibleSeats.push(rowAbove[j]);

                rowAbove = input[i - 1];

                step = 1;

                // Looking northwest.

                if (rowAbove[j - 1] != undefined) {

                    while (rowAbove[j - step] == '.') {

                        step++;

                        rowAbove = input[i - step];

                        if (rowAbove == undefined) {

                            rowAbove = input[i - step + 1];

                            step--;

                            break;

                        }

                    }

                    visibleSeats.push(rowAbove[j - step]);

                    rowAbove = input[i - 1];

                    step = 1;

                }

                // Looking northeast.

                if (rowAbove[j + 1] != undefined) {

                    while (rowAbove[j + step] == '.') {

                        step++;

                        rowAbove = input[i - step];

                        if (rowAbove == undefined) {

                            rowAbove = input[i - step + 1];

                            step--;

                            break;

                        }

                    }

                    visibleSeats.push(rowAbove[j + step]);

                    rowAbove = input[i - 1];

                    step = 1;

                }

            }

            // Looking south.

            if (rowBelow != undefined) {

                while (rowBelow[j] == '.') {

                    step++;

                    rowBelow = input[i + step];

                    if (rowBelow == undefined) {

                        rowBelow = input[i + step - 1];

                        step--;

                        break;

                    }

                }

                visibleSeats.push(rowBelow[j]);

                rowBelow = input[i + 1];

                step = 1;

                // Looking southwest.

                if (rowBelow[j - 1] != undefined) {

                    while (rowBelow[j - step] == '.') {

                        step++;

                        rowBelow = input[i + step];

                        if (rowBelow == undefined) {

                            rowBelow = input[i + step - 1];

                            step--;

                            break;

                        }

                    }

                    visibleSeats.push(rowBelow[j - step]);

                    rowBelow = input[i + 1];

                    step = 1;

                }

                // Looking southeast.

                if (rowBelow[j + 1] != undefined) {

                    while (rowBelow[j + step] == '.') {

                        step++;

                        rowBelow = input[i + step];

                        if (rowBelow == undefined) {

                            rowBelow = input[i + step - 1];

                            step--;

                            break;

                        }

                    }

                    visibleSeats.push(rowBelow[j + step]);

                    rowBelow = input[i + 1];

                    step = 1;

                }

            }

            let count = 0;

            for (let k = 0; k < visibleSeats.length; k++) {

                if (visibleSeats[k] == '#') {

                    count++;

                }

            }

            // Conditional is updated with the new requirement that it now takes five or more visible occupied seats for an occupied seat to become empty.

            if (seat == 'L' && !visibleSeats.includes('#')) {

                row += '#';

                iterations++;

            } else if (seat == '#' && count >= 5) {

                row += 'L';

                iterations++;

            } else if (seat == '.') {

                row += '.';

            } else {

                row += seat;

            }

        }

        seatingChartPartTwo.push(row);

    }

    return seatingChartPartTwo;

}

function checkChartTwo(input) {

    let copy = boardingGroupPartTwo(input);

    while (iterations != 0) {

        iterations = 0;

        return checkChartTwo(copy);

    }

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

console.log(checkChartTwo(input));