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

// Solution for Part Two

function sortNumerically(a, b) {

    return a - b;

}

let sorted = input.sort(sortNumerically);

// Pushes in the values for the charging outlet and my device's built-in adapter.

sorted.unshift('0');
sorted.push('180');

let groups = [];
let group = [];

// Loops through the sorted array and groups smaller arrays at breakpoints where the difference is three. Since three is the maximum "jump" any adapter can make, these values can't be altered.

for (let i = 0; i < sorted.length; i++) {

    if (Number(sorted[i + 1]) - Number(sorted[i]) == 1) {

        group.push(Number(sorted[i]));

    } else if (Number(sorted[i + 1]) - Number(sorted[i]) == 3) {

        group.push(Number(sorted[i]));

        groups.push(group);
        
        group = [];

    }

}

let totalArrangements = 1;

// Function that calculates the total number of arrangements via factoring. Since no group's length is greater than five there are only three possible permutations within the input data: 2, 4, and 7. Each time a permutation is found it's multiplied by the sum. The total number of arrangements is then returned at the end of the loop.

function calculateArrangements() {

    for (let i = 0; i < groups.length; i++) {

        if (groups[i].length == 3) {

            totalArrangements *= 2;

        } else if (groups[i].length == 4) {

            totalArrangements *= 4;

        } else if (groups[i].length == 5) {

            totalArrangements *= 7;

        }

    }

    return totalArrangements;

}

console.log(calculateArrangements());