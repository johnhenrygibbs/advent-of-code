var fs = require('fs');
var input = fs.readFileSync('2022/Day 2/input.txt').toString().split("\n");

// Solution for Part One

let totalScore = 0;

for (let i = 0; i < input.length; i++) {

    let line = input[i].split("");
    line.splice(1, 1);

    opponentChoice = line[0];
    myChoice = line[1];

    // Path for when opponent chooses rock.

    if (opponentChoice === 'A') {

        if (myChoice === 'X') {

            totalScore += 4;

        } else if (myChoice === 'Y') {

            totalScore += 8;

        } else if (myChoice === 'Z') {

            totalScore += 3;

        }

    }

    // Path for when opponent chooses paper.

    if (opponentChoice === 'B') {

        if (myChoice === 'X') {

            totalScore += 1;

        } else if (myChoice === 'Y') {

            totalScore += 5;

        } else if (myChoice === 'Z') {

            totalScore += 9;

        }

    }

    // Path for when opponent chooses scissors.

    if (opponentChoice === 'C') {

        if (myChoice === 'X') {

            totalScore += 7;

        } else if (myChoice === 'Y') {

            totalScore += 2;

        } else if (myChoice === 'Z') {

            totalScore += 6;

        }

    }

}

console.log(totalScore);