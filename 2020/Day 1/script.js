var fs = require('fs');
var input = fs.readFileSync('2020/Day 1/input.txt').toString().split("\n").map(Number);

// Solution for Part One

let result = 0;

for (let i = 0; i < input.length; i++) {

    numberToTry = input[i];

    for (let j = 1; j < input.length; j++) {

        if (numberToTry + input[j] == 2020) {

            result = numberToTry * input[j]; 

        }

    }

}

console.log(result);

// Solution for Part Two

let resultTwo = 0; 

for (let i = 0; i < input.length; i++) {

    for (let j = 1; j < input.length; j++) {

        for (let k = 2; k < input.length; k++) {

            if (input[i] + input[j] + input[k] == 2020) {

                resultTwo = input[i] * input[j] * input[k];

            }

        }

    }

}

console.log(resultTwo);