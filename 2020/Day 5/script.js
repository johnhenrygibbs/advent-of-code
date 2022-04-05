var fs = require('fs');
var input = fs.readFileSync("2020/Day 5/input.txt").toString().split("\n");

// Solution for Part One

let boardingPass = "";

let uniqueSeatId; 
let highestSeatId = 0; 

let rows = [];
let columns = [];
let rowNumber; 
let columnNumber; 
let rowHalf;
let columnHalf; 

// Two loops create a zero-based array for rows and columns on the plane. 

for (let i = 0; i < 128; i++) {

    rows.push(i);

}

for (let i = 0; i < 8; i++) {

    columns.push(i);

}

// Looping through all of the boarding passes. 

for (let j = 0; j < input.length; j++) {

    boardingPass = input[j];

    // Looping through the rows and determining front or back. 

    for (let k = 0; k < boardingPass.length - 3; k++) {

        rowHalf = Math.ceil(rows.length / 2);
        front = rows.splice(0, rowHalf);
        back = rows.splice(-rowHalf);

        if (boardingPass[k] == "F") {

            rows = front;

        } else if (boardingPass[k] == "B") {

            rows = back; 

        }

        rowNumber = rows; 

    }

    // Looping through the columns and determining left or right. 

    for (let m = 7; m < boardingPass.length; m++) {

        columnHalf = Math.ceil(columns.length / 2);
        left = columns.splice(0, columnHalf);
        right = columns.splice(-columnHalf);

        if (boardingPass[m] == "L") {

            columns = left;

        } else if (boardingPass[m] == "R") {

            columns = right; 

        }

        columnNumber = columns; 

    }

    // Calculating the unique seat ID and checking to see if it's the highest value. 

    uniqueSeatId = rowNumber[0] * 8 + columnNumber[0];

    if (uniqueSeatId > highestSeatId) {

        highestSeatId = uniqueSeatId; 

    }

    // Resetting the rows and columns in order to loop through the next boarding pass. 

    rows = [];
    columns = []; 

    for (let i = 0; i < 128; i++) {

        rows.push(i);
    
    }
    
    for (let i = 0; i < 8; i++) {
    
        columns.push(i);
    
    }

}

console.log(highestSeatId); 