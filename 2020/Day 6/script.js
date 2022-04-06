var fs = require('fs');
var input = fs.readFileSync("2020/Day 6/input.txt").toString().split("\n\n");

// Solution for Part One

let questions = [];
let group = "";
let letter = "";
let total = 0;

for (let i = 0; i < input.length; i++) {

    group = input[i];

    // Iterating through each group of questions passengers answered 'yes' to and putting those letters into an array (excluding newline characters and duplicates).

    for (let j = 0; j < group.length; j++) {

        letter = group[j];

        if (!questions.includes(letter) && letter != "\n") {

            questions.unshift(letter);

        }

    }

    // Summing the total lengths of each array and resetting for the next group in data.

    total += questions.length;

    questions = [];

}

console.log(total);