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

// Solution for Part Two

let invalidNumber = findFirstNumber();

function findWeakness() {

    // Nested loop that collects numbers until the result of those numbers added together exceeds the value found in part one.

    for (let i = 0; i < input.length; i++) {

        let contiguousSet = [];
        let count = 0;
    
        contiguousSet.unshift(Number(input[i]));
    
        for (let j = i + 1; j < input.length; j++) {
    
            contiguousSet.unshift(Number(input[j]));

            // Uses reduce function to add all the current values within the contiguousSet array together.
    
            count = contiguousSet.reduce((partialSum, a) => partialSum + a, 0);

            if (count > invalidNumber) {

                break;

            } else if (count == invalidNumber) {

                // Since sort operates alphabetically, the following line uses a helper function to sort the array numerically before returning the result of the smallest and largest numbers in the set added together.

                contiguousSet.sort(sortNumerically);

                return contiguousSet[0] + contiguousSet[contiguousSet.length - 1];

            }
            
        }

    }

}

function sortNumerically(a, b) {

    return a - b;

}

console.log(findWeakness());