var fs = require('fs');
var input = fs.readFileSync("2020/Day 13/input.txt").toString().split("\n");

// Solution for Part One

let myDepartureTime = Number(input[0]);
let busesList = input[1].split(",");
let busesInService = [];
let earliestDepartureTimes = [];

// Loop that pushes the buses in service to a clean array, ignoring buses not in service.

for (let i = 0; i < busesList.length; i++) {

    if (busesList[i] != 'x') {

        busesInService.push(busesList[i]);

    }
    
}

// Helper function that determines the closest departure time of a given bus to my departure time.

function departureLoop(number) {

    let closestDepartureTime = 0;

    while (closestDepartureTime < myDepartureTime) {

        closestDepartureTime += number;

    }

    return closestDepartureTime;

}

// Helper function that calculates the closest departure times of all buses in service to my departure time and returns an array of those numbers.

function calculateDepartureTimes() {

    for (let i = 0; i < busesInService.length; i++) {

        let busToCheck = Number(busesInService[i]);

        let earliestDepartureTime = departureLoop(busToCheck);

        earliestDepartureTimes.push(earliestDepartureTime);

    }

    return earliestDepartureTimes;

}

// Function that finds the number of minutes you would have to wait for each bus in service, saving the lowest one and multiplying that number by the index of the relevant bus in service.

function findEarliestBus() {

    let closestBusTimes = calculateDepartureTimes();

    let differencesArray = [];

    for (let i = 0; i < closestBusTimes.length; i++) {

        differencesArray.push(closestBusTimes[i] - myDepartureTime);

    }

    let lowest = differencesArray[0];
    let index = 0; 

    for (let j = 1; j < differencesArray.length; j++) {

        if (differencesArray[j] < lowest) {

            lowest = differencesArray[j];
            index = differencesArray.indexOf(lowest);
            
        }

    }

    return lowest * busesInService[index];

}

console.log(findEarliestBus());

// Solution for Part Two

