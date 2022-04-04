var fs = require('fs');
const { emitKeypressEvents } = require('readline');
var input = fs.readFileSync("2020/Day 4/input.txt").toString().split('\n\n');

// Solution for Part One 

let totalValid = 0; 

for (let i = 0; i < input.length; i++) {

    if (input[i].includes("byr") && input[i].includes("iyr") && input[i].includes("eyr") && input[i].includes("hgt") && input[i].includes("hcl") && input[i].includes("ecl") && input[i].includes("pid")) {

        totalValid++;

    }

}

console.log(totalValid);

// Solution for Part Two

let totalValidTwo = 0; 
let categories = []; 

let birthYear = [];
let eyeColor = []; 
let expirationYear = []; 
let hairColor = [];
let height = [];
let issueYear = []; 
let passportId = []; 

let isValid; 

for (let j = 0; j < input.length; j++) {

    isValid = true; 
    let sixCharacters = "";

    if (input[j].includes("byr") && input[j].includes("iyr") && input[j].includes("eyr") && input[j].includes("hgt") && input[j].includes("hcl") && input[j].includes("ecl") && input[j].includes("pid")) {

        // The below expression splits a string with multiple separators, in this case blank spaces and newlines, and sorts them alphabetically. 
        
        categories = input[j].split(/[\n ]/).sort(); 

        if (categories.length == 8) {

            categories.splice(1, 1);

        }

        birthYear = categories[0].split(":");
        eyeColor = categories[1].split(":");
        expirationYear = categories[2].split(":");
        hairColor = categories[3].split(":");
        height = categories[4].split(":");
        issueYear = categories[5].split(":");
        passportId = categories[6].split(":");
        
        sixCharacters = hairColor[1].substring(1);

        // Validation for birth year. 

        if (Number(birthYear[1]) < 1920 || Number(birthYear[1]) > 2002) {

            isValid = false; 

        } 

        // Validation for eye color. 

        if (eyeColor[1] != "amb" && eyeColor[1] != "blu" && eyeColor[1] != "brn" && eyeColor[1] != "gry" && eyeColor[1] != "grn" && eyeColor[1] != "hzl" && eyeColor[1] != "oth") {

            isValid = false;

        } 

        // Validation for expiration year. 

        if (Number(expirationYear[1]) < 2020 || Number(expirationYear[1]) > 2030) {

            isValid = false;

        } 

        // Validation for hair color. 

        if (hairColor[1][0] != "#" && sixCharacters.length != 6) { 

            isValid = false; 

        }

        // Validation for height if missing measurement.

        if (!height[1].includes("in") && !height[1].includes("cm")) {

            isValid = false; 

        }

        // Validation for height (centimeters).

        if (height[1].includes("cm")) {

            let centimeters = height[1].replace("cm", "");

            if ((Number(centimeters)) < 150 || Number(centimeters) > 193) {

                isValid = false; 

            }

        } 

        // Validation for height (inches). 

        if (height[1].includes("in")) {

            let inches = height[1].replace("in", "");

            if ((Number(inches)) < 59 || Number(inches) > 76) {

                isValid = false;

            }
            
        }

        // Validation for issue year. 

        if (Number(issueYear[1]) < 2010 || Number(issueYear[1]) > 2020) {

            isValid = false; 

        }

        // Validation for passport ID length. 

        if (passportId[1].length != 9) {

            isValid = false; 

        }

        // Final conditional to check if entire passport passes. 

        if (isValid == true) {

            totalValidTwo++; 
    
        }

    }

}

console.log(totalValidTwo);