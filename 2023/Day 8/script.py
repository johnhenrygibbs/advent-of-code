with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 8/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

# Isolating the instructions and removing new line from input data.

instructions = input.pop(0)
input.pop(0)

# The makeDictionary function returns a dictionary of maps with the location as keys and possible paths as values.

def makeDictionary(input):

    maps = {}

    for line in input:

        data = line.split(" = ")
        node = data[0]
        nextNode = data[1][1:9].split(", ")
        maps[node] = nextNode

    return maps

myDictionary = makeDictionary(input)
location = 'AAA'

# The hauntedWasteland() function returns the total steps needed to traverse the desert.

def hauntedWasteland(location, myDictionary):

    totalSteps = 0

    # While the location doesn't equal 'ZZZ' continue iterating through the instructions string.

    while location != 'ZZZ':

        for command in instructions:

            # The paths variable is an array of two options that represent the next key to jump to based on a command.

            paths = myDictionary[location]

            if command == 'L':

                location = paths[0]
                totalSteps += 1

            elif command == 'R':

                location = paths[1]
                totalSteps += 1

    return totalSteps

print(hauntedWasteland(location, myDictionary))