var fs = require('fs');
var input = fs.readFileSync("2020/Day 6/input.txt").toString().split("\n\n");

// Solution for Part One

let questions = [];
let group = "";
let letter = "";
let total = 0;

for (let i = 0; i < input.length; i++) {

    group = input[i];

    // Iterating through each group of questions passengers answered 'yes' to and putting those letters into an array (excluding newline characters and duplicates).

    for (let j = 0; j < group.length; j++) {

        letter = group[j];

        if (!questions.includes(letter) && letter != "\n") {

            questions.unshift(letter);

        }

    }

    // Summing the total lengths of each array and resetting for the next group in data.

    total += questions.length;

    questions = [];

}

console.log(total);

// Solution for Part Two

// Creating an object to hold the counts of each 'yes' letter (question).

let alphabet = {

    a: 0, 
    b: 0, 
    c: 0, 
    d: 0, 
    e: 0, 
    f: 0, 
    g: 0, 
    h: 0, 
    i: 0, 
    j: 0, 
    k: 0, 
    l: 0, 
    m: 0, 
    n: 0, 
    o: 0, 
    p: 0, 
    q: 0, 
    r: 0, 
    s: 0, 
    t: 0, 
    u: 0, 
    v: 0, 
    w: 0, 
    x: 0, 
    y: 0, 
    z: 0

}

let answers = "";
let totalTwo = 0; 

for (let i = 0; i < input.length; i++) {

    group = input[i].split("\n");

    // Iterating through each group of responses collected together.

    for (let j = 0; j < group.length; j++) {

        answers = group[j];

        // Iterating through each individual response (i.e. one line or string of input letters).

        for (let k = 0; k < answers.length; k++) {

            // Iterating through the alphabet object and counting the appearances of each letter.

            for (let letter in alphabet) {

                if (letter == answers[k]) {

                    alphabet[letter]++; 

                }

            }
 
        }


    }

    // Conditional that adds to the total if letter appearances match the length of the group (i.e. each passenger said 'yes' to a particular question). 

    for (let letter in alphabet) {

        if (alphabet[letter] == group.length) {

            totalTwo++; 

        }

    }   

    // Resets the alphabet object for the next iteration of input data. 

    for (let letter in alphabet) {

        alphabet[letter] = 0; 

    }

}

console.log(totalTwo);