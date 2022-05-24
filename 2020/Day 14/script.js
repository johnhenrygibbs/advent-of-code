var fs = require('fs');
var input = fs.readFileSync("2020/Day 14/input.txt").toString().split("\n");

// Solution for Part One

// Helper function that converts a decimal to a binary string.

function convertToBinaryString(num) {

    let result = "";
    let value = Number(num).toString(2);
    let leadingZeroes = 36 - value.length;

    while (leadingZeroes > 0) {

        result += "0";

        leadingZeroes--;

    }

    return result + value;

}

// Helper function that converts a binary string to a decimal.

function convertToDecimal(string) {

    return parseInt(string, 2);

}

let memory = {};
let bitmask = "";

// Loop that applies the bitmask to the values and writes the resulting values to memory.

for (let i = 0; i < input.length; i++) {

    let line = input[i].split(" = ");

    if (line[0] == 'mask') {

        bitmask = line[1];

    } else if (line[0] != 'mask') {

        let address = Number(line[0].substring(4, line[0].length - 1));
        let value = convertToBinaryString(Number(line[1]));
        let maskedValue = "";

        for (let j = 0; j < 36; j++) {

            if (bitmask[j] == 'X') {

                maskedValue += value[j];

            } else if (bitmask[j] == '0') {

                maskedValue += bitmask[j];

            } else if (bitmask[j] == '1') {

                maskedValue += bitmask[j];

            }

        }

        memory[address] = convertToDecimal(maskedValue);

    }

}

// Function that loops through the memory and sums all the values written to each address.

function sumValues(memory) {

    let sum = 0;

    for (let address in memory) {

        sum += memory[address];

    }

    return sum;

}

console.log(sumValues(memory));