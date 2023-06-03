var fs = require('fs');
var input = fs.readFileSync('2022/Day 1/input.txt').toString().split("\n").map(Number);

// Solution for Part One

let biggest = 0;
let calorieCount = 0;

for (let i = 0; i < input.length; i++) {

    if (input[i] === 0) {

        if (calorieCount > biggest) {

            biggest = calorieCount;

        }

        calorieCount = 0;

    }

    calorieCount += input[i];

}

console.log(biggest);

// Solution for Part Two

// Create an elves array to hold the total calories for each elf as we iterate through the input data.

let elves = [];
let calories = 0;

for (let i = 0; i < input.length; i++) {

    if (input[i] === 0) {

        elves.push(calories);
        calories = 0;

    }

    calories += input[i];

}

// Sort the elves array in descending order and sum the top three elves.

elves.sort(function(a, b) {

    return b - a;

});

console.log(elves[0] + elves[1] + elves[2]);