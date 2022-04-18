var fs = require('fs');
var input = fs.readFileSync("2020/Day 9/input.txt").toString().split("\n");

// Solution for Part One

let numbersArray = [];
let firstNumber;
let secondNumber;
let numberToCheck;

function findFirstNumber() {

    // First loop grabs the number to check.

    for (let i = 25; i < input.length; i++) {

        numberToCheck = Number(input[i]);

        // Second loop sets the bottom value of the range, so the window of 25 values moves each time the number to check is incremented.
    
        for (let j = i - 25; j < i; j++) {
    
            firstNumber = Number(input[j]);

            // Third loop adds all the possible values together within the window and pushes them into an array.
    
            for (let k = j + 1; k < i; k++) {

                secondNumber = Number(input[k]);

                numbersArray.unshift(firstNumber + secondNumber);

            }
    
        }

        // Conditional checks whether or not the number to check is included within that array of values and returns the number to check if not found.

        if (!numbersArray.includes(numberToCheck)) {

            return numberToCheck;

        } else {

            numbersArray = []; 

        }
    
    }

}

console.log(findFirstNumber());