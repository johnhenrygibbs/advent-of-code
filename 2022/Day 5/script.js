var fs = require('fs');
var input = fs.readFileSync('2022/Day 5/input.txt').toString().split("\n");

let stacks = {

    1: ['H', 'T', 'Z', 'D'],
    2: ['Q', 'R', 'W', 'T', 'G', 'C', 'S'],
    3: ['P', 'B', 'F', 'Q', 'N', 'R','C', 'H'],
    4: ['L', 'C', 'N', 'F', 'H', 'Z'],
    5: ['G', 'L', 'F', 'Q', 'S'],
    6: ['V', 'P', 'W', 'Z', 'B', 'R', 'C', 'S'],
    7: ['Z', 'F', 'J'],
    8: ['D', 'L', 'V', 'Z', 'R', 'H', 'Q'],
    9: ['B', 'H', 'G', 'N', 'F', 'Z', 'L', 'D']

}

// Creating stacksClone for Part Two.

let stacksClone = {

    1: ['H', 'T', 'Z', 'D'],
    2: ['Q', 'R', 'W', 'T', 'G', 'C', 'S'],
    3: ['P', 'B', 'F', 'Q', 'N', 'R','C', 'H'],
    4: ['L', 'C', 'N', 'F', 'H', 'Z'],
    5: ['G', 'L', 'F', 'Q', 'S'],
    6: ['V', 'P', 'W', 'Z', 'B', 'R', 'C', 'S'],
    7: ['Z', 'F', 'J'],
    8: ['D', 'L', 'V', 'Z', 'R', 'H', 'Q'],
    9: ['B', 'H', 'G', 'N', 'F', 'Z', 'L', 'D']

}

// Solution for Part One

for (let i = 0; i < input.length; i++) {

    let step = input[i];
    let commands = isolateNumbers(step);
    let moves = commands[0];
    let cratesToMove = [];

    while (moves > 0) {

        let crate = stacks[commands[1]].pop();
        let crateClone = stacksClone[commands[1]].pop();
        stacks[commands[2]].push(crate);
        cratesToMove.unshift(crateClone);
        moves--;

    }

    // Solution for Part Two

    // After moving crate clones into a separate array to preserve order, iterate over the array to update stacksClone and reset array.

    for (let j = 0; j < cratesToMove.length; j++) {

        stacksClone[commands[2]].push(cratesToMove[j]);

    }

    cratesToMove = [];

}

// Iterating through the new order of stacks, concatenate each array's final letter for the end result.

let result = "";
let resultClone = "";

for (let stack in stacks) {

    result += stacks[stack].pop();

}

for (let stack in stacksClone) {

    resultClone += stacksClone[stack].pop();

}

console.log(result);
console.log(resultClone);

// Helper function isolates the numbers found within a given string and returns them in an ordered array.

function isolateNumbers(string) {

    let numbers = [];
    let procedure = string.split("from");
    let crates = procedure[0].match(/[0-9]/g);
    let moves = procedure[1].match(/[0-9]/g);

    if (crates.length > 1) {

        crates = Number(crates.join(""));

    } else {

        crates = Number(crates[0]);

    }

    numbers.push(crates, Number(moves[0]), Number(moves[1]));

    return numbers;

}