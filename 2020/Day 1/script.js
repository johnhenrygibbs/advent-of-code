var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split("\n").map(Number);

// Solution for Part One

let result = 0

for (let i = 0; i < input.length; i++) {

    numberToTry = input[i];

    for (let j = 1; j < input.length; j++) {

        if (numberToTry + input[j] == 2020) {

            result = numberToTry * input[j]; 

        }

    }

}

console.log(result);