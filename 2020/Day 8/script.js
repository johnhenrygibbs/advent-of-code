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

    // Conditional that pushes completed instructions to an array if no duplicate positions are found and returns the function. If a duplicate position is found, then the accumulator variable is returned.

    if (!completedInstructions.includes(position)) {

        completedInstructions.unshift(position);

        return bootCode();

    } else {

        return accumulator;

    }

}

console.log(bootCode());

// Solution for Part Two

let terminated = false; 

let completedCommands = []; 
let commands = [];
let count = 0; 
let index = 0; 

function findDupes(input) {

    commands = input[index].split(" ");

    if (commands[0] == "acc") { 

        count += Number(commands[1]);

        index++;

    } else if (commands[0] == "nop") {

        index++;

    } else if (commands[0] == "jmp") {

        index += Number(commands[1]);

    }

    // Conditional that checks to see if the instruction immediately after the last instruction in the file tries to operate. If yes, we switch terminated to true.

    if (index == input.length) {

        terminated = true; 
        
        return count; 

    } else if (!completedCommands.includes(index)) {

        completedCommands.unshift(index);

        return findDupes(input);

    } else {

        return count;

    }

}

function terminateProgram() {

    // Iterates through the input, switching "jmp" to "nop" and vice versa. The return value of findDupes(input) is stored inside of a result variable and everything is reset for the next attempt.

    for (let i = 0; i < input.length; i++) {

        let result = 0; 

        if (input[i].substring(0, 3) == "jmp") {

            input[i] = "nop" + input[i].substring(3);

            result = findDupes(input);

            input[i] = "jmp" + input[i].substring(3);
            completedCommands = []; 
            count = 0; 
            index = 0;

        } else if (input[i].substring(0, 3) == "nop") {

            input[i] = "jmp" + input[i].substring(3);

            result = findDupes(input);

            input[i] = "nop" + input[i].substring(3);
            completedCommands = []; 
            count = 0; 
            index = 0;

        }

        // If terminated equals true, then return the value of the accumulator.

        if (terminated == true) {

            return result; 
            
        }

    }

}

console.log(terminateProgram());