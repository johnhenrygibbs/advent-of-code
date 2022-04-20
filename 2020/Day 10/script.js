var fs = require('fs'); 
var input = fs.readFileSync("2020/Day 10/input.txt").toString().split("\n");

// Solution for Part One

// Function that returns the output joltage of my device, which is 3 jolts higher than the highest adapter in my bag. 

function findMyDeviceAdapter() {

    let highest = Number(input[0]);

    for (let i = 1; i < input.length; i++) {

        let number = Number(input[i]);
    
        if (number > highest) {
    
            highest = number;
    
        }
    
    }

    return deviceAdapter = highest + 3;

}

let currentAdapter = 0;
let oneJolt = 0;
let threeJolt = 0;

// Function that finds the proper order of the adapter chain and increments 1-jolt differences and 3-jolt differences accordingly.

function findChain() {

    let foundThree = false;
    let tempNumber;

    for (let i = 0; i < input.length; i++) {

        if (Number(input[i]) - currentAdapter == 3) {

            foundThree = true;

            tempNumber = Number(input[i]);

        } else if (Number(input[i]) - currentAdapter == 1) {

            currentAdapter = Number(input[i]);

            return oneJolt++;

        }

    }

    if (foundThree) {

        currentAdapter = tempNumber;

        return threeJolt++;

    } 

}

// Condition that sets the limit for the number of times the findChain() function will be called and then performs a simple calculation of the joltage differences (remembering to increment the 3-jolt difference by one to account for my device's joltage).

while (currentAdapter < (findMyDeviceAdapter() - 3)) {

    findChain();

}

console.log(oneJolt * (threeJolt + 1));