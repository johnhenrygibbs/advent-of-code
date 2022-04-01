var fs = require('fs');
var input = fs.readFileSync("2020/Day 3/input.txt").toString().split("\n");

// Solution for Part One 

let totalTrees = 0; 
let spaceToCheck = ''; 
let position = 0; 

for (let i = 1; i < input.length; i++) {

    position += 3;

    if (position == 31) {

        position = 0;

    }
    
    if (position == 32) {

        position = 1;

    } 
    
    if (position == 33) {

        position = 2;

    }

    spaceToCheck = input[i][position];

    if (spaceToCheck == '#') {

        totalTrees++;

    }

}

console.log(totalTrees);