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

// Function that finds how many minutes after each subsequent bus arrives at the station by grabbing the index of each number in the input data.

function findMinutesAfter(input) {

	let minutes = [];

	for (let i = 0; i < input.length; i++) {

		if (input[i] != 'x') {

			minutes.push(input.indexOf(input[i]));

		}

	}

	return minutes;

}

let minutesAfter = findMinutesAfter(busesList);

function findEarliestTimestamp() {

	let t = 0;
	let timestamp;
	let interval = Number(busesInService[0]);

	// Loop that iterates through the buses in service and looks for match between first two buses.

	for (let i = 0; i < busesInService.length - 1; i++) {

		// While no matches are found, we increase 't' by the present interval and keep looking.

		while ((t + minutesAfter[i]) % Number(busesInService[i]) != (t + minutesAfter[i + 1]) % Number(busesInService[i + 1])) {

			t += interval;

		}

		// Once a match is found 't' is saved as the timestamp and the interval is increased to match the subsequent point where the departure times for buses one and two already match, thus allowing the function to iterate through the loop faster.

		timestamp = t;

		interval = interval * Number(busesInService[i + 1]);

	}

	return timestamp;

}

console.log(findEarliestTimestamp());