var fs = require('fs');
var input = fs.readFileSync('2022/Day 2/input.txt').toString().split("\n");

let totalScoreOne = 0;
let totalScoreTwo = 0;

for (let i = 0; i < input.length; i++) {

    let line = input[i].split("");
    line.splice(1, 1);

    opponentChoice = line[0];
    myChoice = line[1];

    // Path for when opponent chooses rock.

    if (opponentChoice === 'A') {

        if (myChoice === 'X') {

            totalScoreOne += 4;
            totalScoreTwo += 3;

        } else if (myChoice === 'Y') {

            totalScoreOne += 8;
            totalScoreTwo += 4;

        } else if (myChoice === 'Z') {

            totalScoreOne += 3;
            totalScoreTwo += 8;

        }

    }

    // Path for when opponent chooses paper.

    if (opponentChoice === 'B') {

        if (myChoice === 'X') {

            totalScoreOne += 1;
            totalScoreTwo += 1;

        } else if (myChoice === 'Y') {

            totalScoreOne += 5;
            totalScoreTwo += 5;

        } else if (myChoice === 'Z') {

            totalScoreOne += 9;
            totalScoreTwo += 9;

        }

    }

    // Path for when opponent chooses scissors.

    if (opponentChoice === 'C') {

        if (myChoice === 'X') {

            totalScoreOne += 7;
            totalScoreTwo += 2;

        } else if (myChoice === 'Y') {

            totalScoreOne += 2;
            totalScoreTwo += 6;

        } else if (myChoice === 'Z') {

            totalScoreOne += 6;
            totalScoreTwo += 7;

        }

    }

}

console.log(totalScoreOne);
console.log(totalScoreTwo);