var fs = require('fs');
var input = fs.readFileSync('2022/Day 4/input.txt').toString().split("\n");

// Solution for Part One

let validPairs = 0;
let totalOverlaps = 0;

for (let i = 0; i < input.length; i++) {

    let pairs = input[i].split(",");
    let firstElf = pairs[0].split("-");
    let secondElf = pairs[1].split("-");

    // Once each pair has been split into an array, convert the strings to numbers.

    for (let i = 0; i < firstElf.length; i++) {

        firstElf[i] = Number(firstElf[i]);
        secondElf[i] = Number(secondElf[i]);

    }

    // Uses helper function to test whether one range contains the other. If so, validPairs is incremented.

    let testOne = containsRange(firstElf, secondElf);
    let testTwo = containsRange(secondElf, firstElf);

    if (testOne === true || testTwo === true) {

        validPairs++;

    }

    // Uses helper function to test whether the ranges overlap at all. If so, totalOverlaps is incremented.

    let overlapsOne = overlaps(firstElf, secondElf);
    let overlapsTwo = overlaps(secondElf, firstElf);

    if (overlapsOne === true || overlapsTwo === true) {

        totalOverlaps++;

    }

}

console.log(validPairs);
console.log(totalOverlaps);

// Helper function to check whether a paired number range is contained within another.

function containsRange(first, second) {

    if (first[0] >= second[0] && first[1] <= second[1]) {

        return true;

    } else {

        return false;

    }

}

// Solution for Part Two

// Helper function that checks for overlap between any two ranges.

function overlaps(first, second) {

    if (first[1] < second[0] || first[0] > second[1]) {

        return false;

    } else {

        return true;

    }

}