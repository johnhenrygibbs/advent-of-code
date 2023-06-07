var fs = require('fs');
var input = fs.readFileSync('2022/Day 3/input.txt').toString().split("\n");

// Solution for Part One

let sum = 0;

for (let i = 0; i < input.length; i++) {

    let rucksack = input[i];

    let firstCompartment = rucksack.substring(0, rucksack.length / 2);
    let secondCompartment = rucksack.substring(rucksack.length / 2);

    let duplicate = findDupes(firstCompartment, secondCompartment);

    // Using our helper function to find the priority, we then roll that value into the sum.

    let priority = findPriority(duplicate);

    sum += priority;

}

console.log(sum);

// Helper function that finds exactly one duplicate case sensitive character between two stings.

function findDupes(first, second) {

    for (let i = 0; i < first.length; i++) {

        if (second.includes(first[i])) {

            return first[i];

        }

    }

}

// Helper function that uses the dupe's ascii value to calculate our priority number.

function findPriority(duplicate) {

    let priority = 0;

    let ascii = duplicate.charCodeAt(0);

    if (ascii >= 97 && ascii <= 122) {

        priority = ascii - 96;

    } else if (ascii >= 65 && ascii <= 90) {

        priority = ascii - 38;

    }

    return priority;

}

// Solution for Part Two

let group = [];
let elves = [];

// Uses a for loop to separate the input data into groups of three.

for (let i = 0; i < input.length; i++) {

    group.push(input[i]);

    if (group.length === 3) {

        elves.push(group);
        group = [];

    }

}

let total = 0;

for (let i = 0; i < elves.length; i++) {

    let group = elves[i];

    // We want to run our helper function twice to get the dupes from the first pairing before comparing against the third.

    let firstPass = findCommonCharacters(group[0], group[1]);
    let secondPass = findCommonCharacters(firstPass, group[2]);

    let priority = findPriority(secondPass);

    total += priority;

}

console.log(total);

// Helper function to find common characters between two strings.

function findCommonCharacters(first, second) {

    let commonCharacters = "";
    let longer = "";
    let shorter = "";

    if (first.length > second.length) {

        longer = first;
        shorter = second;

    } else {

        longer = second;
        shorter = first;

    }

    // Traverse the shorter of the two strings to optimize.

    for (let i = 0; i < shorter.length; i++) {

        if (longer.includes(shorter[i]) && !commonCharacters.includes(shorter[i])) {

            commonCharacters += shorter[i];

        }

    }

    return commonCharacters;

}