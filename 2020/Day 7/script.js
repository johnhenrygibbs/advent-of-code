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

function getBags(color) {

    let rule = "";
    let object = {};

    // First for loop splits up each individual input line into two pieces and creates a contents array.

    for (let i = 0; i < input.length; i++) {

        rule = input[i].split(" bags contain ");

        if (rule[0].includes(color)) {

            let contents = rule[1].split(", ");

            // Second loop iterates over the contents array and creates an object dictionary, with colors as keys and numbers as values.

            for (let j = 0; j < contents.length; j++) {

                let item = contents[j].split(" ").splice(1, 2).join(" ");
                
                object[item] = Number(contents[j][0]);

            }

            // Recursive conditions and count begins for each level of bag found.

            let count = 0; 

            if (Object.keys(object) == "other bags.") {
    
                return 0; 

            } else {

                // Third for loop adds the amount inside the current bag to the count (108) and then uses that number as the coefficient multiplied by the number of bags inside that bag (110) found by calling the getBags() function.

                for (bag in object) {

                    count += object[bag];

                    count += object[bag] * getBags(bag);

                }

                return count; 

            }

        }

    }

}

console.log(getBags("shiny gold"));