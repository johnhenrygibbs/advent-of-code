var fs = require('fs');
var input = fs.readFileSync('2020/Day 2/input.txt').toString().split("\n");

// Solution for Part One

let array = [];
let policy = "";
let policyAsArray = [];
let letter = "";
let password = "";

let totalLetters = 0;
let validPasswords = 0; 

for (let i = 0; i < input.length; i++) {

    array = input[i].split(" ");

    policy = array[0];
    letter = array[1];
    password = array[2];

    policyAsArray = policy.toString().split("-").map(Number);

    for (let j = 0; j < password.length; j++) {

        if (letter[0] == password[j]) {

            totalLetters++;

        }

    }

    if (totalLetters >= policyAsArray[0] && totalLetters <= policyAsArray[1]) {

        validPasswords++;

    }

    totalLetters = 0; 

}

console.log(validPasswords);