var fs = require('fs');
var input = fs.readFileSync("2020/Day 4/input.txt").toString().split('\n\n');

// Solution for Part One 

let totalValid = 0; 

for (let i = 0; i < input.length; i++) {

    if (input[i].includes("byr") && input[i].includes("iyr") && input[i].includes("eyr") && input[i].includes("hgt") && input[i].includes("hcl") && input[i].includes("ecl") && input[i].includes("pid")) {

        totalValid++;

    }

}

console.log(totalValid);