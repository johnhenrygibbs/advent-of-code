from math import lcm

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

def hauntedWasteland(location, dictionary):

    totalSteps = 0

    # While the location doesn't equal 'ZZZ' continue iterating through the instructions string.

    while location != 'ZZZ':

        for command in instructions:

            # The paths variable is an array of two options that represent the next key to jump to based on a command.

            paths = dictionary[location]

            if command == 'L':

                location = paths[0]

            elif command == 'R':

                location = paths[1]

            totalSteps += 1

    return totalSteps

print(hauntedWasteland(location, myDictionary))

# Solution for Part Two

# The "ghost" maps for part two are synced so that each path neatly loops from A to Z. Therefore, finding the least common multiple of paths is one solution.

# Start by finding the nodes that end with 'A' in the dictionary. There are 6 in the input data.

def findNodes(dictionary):

    nodes = []

    for key in dictionary:

        if key[2] == 'A':

            nodes.append(key)

    return nodes

nodes = findNodes(myDictionary)

# Create a helper function to determine when a node ends in the letter 'Z'.

def endsWithZed(node):

    theEnd = True

    if node[2] != 'Z':

        theEnd = False

    return theEnd

def ghostMap(nodes, dictionary):

    totalSteps = []

    # Iterate through the nodes list one at a time and determine how many steps it takes to reach the end.

    for node in nodes:

        nodeSteps = 0
        i = 0

        while endsWithZed(node) == False:

            paths = dictionary[node]

            if instructions[i] == 'L':

                node = paths[0]

            elif instructions[i] == 'R':

                node = paths[1]

            nodeSteps += 1

            # To start over, the instructions index is hard coded to reset once it reaches the end.

            if i == 268:

                i = 0

            else:

                i += 1

        totalSteps.append(nodeSteps)

    return totalSteps

totals = ghostMap(nodes, myDictionary)

print(lcm(*totals))