var fs = require('fs');
var input = fs.readFileSync("2020/Day 3/input.txt").toString().split("\n");

// Solution for Part One (checking the first slope, numbered to reflect part two ordering)

let totalOne = 0;
let totalTwo = 0;
let totalThree = 0;
let totalFour = 0;
let totalFive = 0; 

let positionOne = 0; 
let positionTwo = 0; 
let positionThree = 0; 
let positionFour = 0; 
let positionFive = 0;

let spaceToCheck = ''; 

for (let i = 1; i < input.length; i++) {

    positionTwo += 3;

    if (positionTwo >= 31) {

        positionTwo = positionTwo - 31;

    }

    spaceToCheck = input[i][positionTwo];

    if (spaceToCheck == '#') {

        totalTwo++;

    }

}

console.log(totalTwo);

// Solution for Part Two (checking the other four slopes)

// Checks slope that is right 1, down 1 

for (let i = 1; i < input.length; i++) {

    positionOne += 1;

    if (positionOne >= 31) {

        positionOne = positionOne - 31;

    }

    spaceToCheck = input[i][positionOne];

    if (spaceToCheck == '#') {

        totalOne++;

    }

}

console.log(totalOne);

// Checks slope that is right 5, down 1 

for (let i = 1; i < input.length; i++) {

    positionThree += 5;

    if (positionThree >= 31) {

        positionThree = positionThree - 31;

    }

    spaceToCheck = input[i][positionThree];

    if (spaceToCheck == '#') {

        totalThree++;

    }

}

console.log(totalThree);

// Checks slope that is right 7, down 1 

for (let i = 1; i < input.length; i++) {

    positionFour += 7;

    if (positionFour >= 31) {

        positionFour = positionFour - 31;

    }

    spaceToCheck = input[i][positionFour];

    if (spaceToCheck == '#') {

        totalFour++;

    }

}

console.log(totalFour);

// Checks slope that is right 1, down 2 

for (let i = 2; i < input.length; i += 2) {

    positionFive += 1;

    if (positionFive >= 31) {

        positionFive = positionFive - 31;

    }

    spaceToCheck = input[i][positionFive];

    if (spaceToCheck == '#') {

        totalFive++;

    }

}

console.log(totalFive);

console.log(totalOne * totalTwo * totalThree * totalFour * totalFive);