import itertools

with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 6/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

def boatRace(input):

    totalWays = []
    array = []

    # Begin by iterating through the input and creating arrays for time and distance values.

    for line in input:

        numbers = line.split()
        array.append(numbers[1:])

    time = array[0]
    distance = array[1]

    # Using itertools and the zip() function, iterate simultaneously through time and distance to work with corresponding elapsed and record values.

    for (a, b) in zip(time, distance):

        elapsed = int(a)
        record = int(b)
        milliseconds = 0
        recordsBroken = []

        while milliseconds <= elapsed:

            # Millimeters per second (mpm) is equal to the milliseconds spent holding the button.

            mpm = milliseconds

            totalDistance = (elapsed - milliseconds) * mpm

            # Check to see if the totalDistance exceeds the record value for that race and update the recordsBroken array if so.

            if totalDistance > record:

                recordsBroken.append(totalDistance)

            milliseconds += 1

        # Update the totalWays array with the size of the recordsBroken array after each iteration.

        totalWays.append((len(recordsBroken)))

    result = 1

    # Traverse the totalWays array and multiply the values together to achieve the end result.

    for i in totalWays:

        result = result * i

    return result

print(boatRace(input))