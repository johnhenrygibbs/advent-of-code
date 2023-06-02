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