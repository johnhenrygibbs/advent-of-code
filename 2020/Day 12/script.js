const { timeStamp } = require('console');
var fs = require('fs');
var input = fs.readFileSync("2020/Day 12/input.txt").toString().split("\n");

// Solution for Part One

function findManhattanDistance() {

    // Two values are set to track the position of the ferry throughout the input data. East and north actions increment positively, while west and south actions increment negatively.

    let eastWest = 0;
    let northSouth = 0;

    // The facing variable is set up to track any changes in rotation left or right, where the final degree of rotation equals a given direction (0 equals east, 90 equals south, 180 equals west, and 270 equals north).

    let facing = 0;

    for (let i = 0; i < input.length; i++) {

        let action = input[i].substring(0, 1);
        let value = input[i].substring(1);
    
        // Four conditionals check for direction actions and update the ferry position accordingly.
    
        if (action == 'N') {
    
            northSouth += Number(value);
    
        } else if (action == 'S') {
    
            northSouth -= Number(value);
    
        } else if (action == 'E') {
    
            eastWest += Number(value);
    
        } else if (action == 'W') {
    
            eastWest -= Number(value);
    
        }
    
        // Two conditionals check for left or right turning actions and update the facing variable accordingly.
    
        if (action == 'R') {
    
            facing += Number(value);
            
            if (facing == 360) {
    
                facing = 0;
    
            }
    
            if (facing > 360) {
    
                facing -= 360;
                
            }
    
        } else if (action == 'L') {
    
            facing -= Number(value);
    
            if (facing < 0) {
    
                facing += 360;
    
            }
    
        }
    
        // Last conditional checks for forward action and updates the position accordingly.
    
        if (action == 'F') {
    
            if (facing == 0) {
    
                eastWest += Number(value);
    
            } else if (facing == 90) {
    
                northSouth -= Number(value);
    
            } else if (facing == 180) {
    
                eastWest -= Number(value);
    
            } else if (facing == 270) {
    
                northSouth += Number(value);
    
            }
    
        }
    
    }

    return Math.abs(northSouth) + Math.abs(eastWest);

}

console.log(findManhattanDistance());

// Solution for Part Two

function findWaypoint() {

    let shipEastWest = 0;
    let shipNorthSouth = 0;

    // Starting waypoint coordinates.
    
    let waypointEastWest = 10;
    let waypointNorthSouth = 1;

    for (let i = 0; i < input.length; i++) {

        let action = input[i].substring(0, 1);
        let value = input[i].substring(1);

        // Four conditionals check for direction actions and update the waypoint coordinates accordingly.

        if (action == 'N') {
    
            waypointNorthSouth += Number(value);
    
        } else if (action == 'S') {
    
            waypointNorthSouth -= Number(value);
    
        } else if (action == 'E') {
    
            waypointEastWest += Number(value);
    
        } else if (action == 'W') {
    
            waypointEastWest -= Number(value);
    
        }

        // Three possible rotations that update the waypoint coordinates. The temp variable stores the first coordinate, since it is reassigned immediately within each conditional.

        let temp = waypointEastWest;

        if (input[i] == "R90" || input[i] == "L270") {

            waypointEastWest = waypointNorthSouth;
            waypointNorthSouth = -temp;

        } else if (input[i] == "R180" || input[i] == "L180") {

            waypointEastWest = -waypointEastWest;
            waypointNorthSouth = -waypointNorthSouth;

        } else if (input[i] == "R270" || input[i] == "L90") {

            waypointEastWest = -waypointNorthSouth;
            waypointNorthSouth = temp;

        }

        // Lastly, a simple calculation updates the ship's position as it relates to the waypoint's coordinates.

        if (action == "F") {

            shipEastWest += Number(value) * waypointEastWest;
            shipNorthSouth += Number(value) * waypointNorthSouth;

        }

    }

    return Math.abs(shipEastWest) + Math.abs(shipNorthSouth);

}

console.log(findWaypoint());