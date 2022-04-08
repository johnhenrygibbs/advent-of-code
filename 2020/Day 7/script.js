var fs = require('fs');
var input = fs.readFileSync("2020/Day 7/input.txt").toString().split("\n");

// Solution for Part One

let validBagColors = [];

// Recursive function that returns how many bag colors can hold at least one shiny gold bag.

function getValidBags(input) { 

    let matches = 0;
    let rule = "";

    // First loop gathers up the primary bags (one level up) that directly hold shiny gold bags and is ignored each time the function recurs.

    for (let i = 0; i < input.length; i++) {

        rule = input[i].split(" bags contain ");

        if (rule[1].includes("shiny gold")) {

            validBagColors.unshift(rule[0]);

            input.splice(i, 1);
            
        }

    }

    // Second loop is nested and iterates through the input file and the array of valid bags looking for deeper matches with secondary bags (more than one level up).

    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < validBagColors.length; j++) {

            rule = input[i].split(" bags contain "); 

            if (rule[1].includes(validBagColors[j])) {

                matches++;

                validBagColors.unshift(rule[0]); 

                input.splice(i, 1);

            }

        }

    }

    // Condition that either reruns the function until no matches are found or returns the length of the valid bag array.

    while (matches != 0) {

        return getValidBags(input);

    } 

    return validBagColors.length;

}

console.log(getValidBags(input));

// Solution for Part Two 

let foundBags = [];
let validBags = []; 

function getShinyGoldBagsContents(input) {

    let rule = "";

    for (let i = 0; i < input.length; i++) {

        rule = input[i].split(" bags contain ");
        foundBags = rule[1].split(", ");

        if (rule[0].includes("shiny gold")) {

            for (let j = 0; j < foundBags.length; j++) {

                validBags.unshift(foundBags[j]);

            }

            return validBags; 

        }

    }

}

function getBags(input) {

    let bags = getShinyGoldBagsContents(input);

    let total = 0; 

    for (let i = 0; i < bags.length; i++) {

        total += Number(bags[i][0]);

    }

    console.log(total);

    return bags; 

}

console.log(getBags(input));