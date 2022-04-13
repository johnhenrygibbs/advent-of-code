var fs = require('fs');
var input = fs.readFileSync("2020/Day 8/input.txt").toString().split("\n");

// Solution for Part One

let completedInstructions = [];
let instructions = [];
let accumulator = 0;
let position = 0;

function bootCode() {

    instructions = input[position].split(" ");

    // A series of conditionals that check whether the action is an accumulator, jump, or no operation and updates the accumlator and position variables accordingly.

    if (instructions[0] == "acc") { 

        accumulator += Number(instructions[1]);

        position++;

    } else if (instructions[0] == "nop") {

        position++;

    } else if (instructions[0] == "jmp") {

        position += Number(instructions[1]);

    }

    // Conditional that pushes completed instructions to an array if no duplicate positions are found. If a duplicate position is found, then the accumulator variable is returned.

    if (!completedInstructions.includes(position)) {

        completedInstructions.unshift(position);

        return bootCode();

    } else {

        return accumulator;

    }

}

console.log(bootCode());