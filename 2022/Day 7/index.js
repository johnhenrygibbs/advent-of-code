var fs = require('fs');
var input = fs.readFileSync('2022/Day 7/input.txt').toString().split("\n");

// Solution for Part One

let filePath = [];
let directory = {};

for (let i = 0; i < input.length; i++) {

    let line = input[i].split(" ");

    switch(line[0]) {

        case '$':

            if (line[1] == 'cd') {

                if (line[2] == '..') {

                    path.pop();

                } else {

                    path.push(line[2]);

                }

            }

        break;

        case 'dir':



    }

    console.log(current);

}