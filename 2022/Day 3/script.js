var fs = require('fs');
var input = fs.readFileSync('2022/Day 3/input.txt').toString().split("\n");

// Solution for Part One

let priority = 0;
let sum = 0;

for (let i = 0; i < input.length; i++) {

    let rucksack = input[i];

    let firstCompartment = rucksack.substring(0, rucksack.length / 2);
    let secondCompartment = rucksack.substring(rucksack.length / 2);

    let duplicate = findDupes(firstCompartment, secondCompartment);

    // We use the dupe's ascii value to calculate our priority number and add it to the sum.

    let ascii = duplicate.charCodeAt(0);

    if (ascii >= 97 && ascii <= 122) {

        priority = ascii - 96;

    } else if (ascii >= 65 && ascii <= 90) {

        priority = ascii - 38;

    }

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