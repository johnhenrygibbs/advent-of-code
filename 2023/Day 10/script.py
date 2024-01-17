import math

with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 10/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

# Defining several lookup tables for reference.

adjacent = {

    "east": ["-", "L", "F"],
    "south": ["|", "7", "F"],
    "west": ["-", "J", "7"],
    "north": ["|", "L", "J"]

}

fittings = {

    "|": ("north", "south"),
    "-": ("east", "west"),
    "L": ("north", "east"),
    "J": ("north", "west"),
    "7": ("south", "west"),
    "F": ("south", "east")

}

directions = {

    "west": (0, -1),
    "east": (0, 1),
    "south": (1, 0),
    "north": (-1, 0)

}

# The first function returns the location of 'S' within the input data.

def findStart(input):

    for line in input:

        if 'S' in line:

            row = input.index(line)
            column = line.index('S')

            return row, column

coordinates = findStart(input)

row = coordinates[0]
column = coordinates[1]

# The second function returns a tuple that contains the next pipe's coordinates and the known direction moved.

def establishDirection(row, column):

    east = input[row][column + 1]
    south = input[row + 1][column]
    west = input[row][column - 1]
    north = input[row - 1][column]

    if east in adjacent["west"]:

        column = column + 1
        moved = "west"

    elif south in adjacent["north"]:

        row = row + 1
        moved = "north"

    elif west in adjacent["east"]:

        column = column - 1
        moved = "east"

    elif north in adjacent["south"]:

        row = row - 1
        moved = "south"

    return row, column, moved

info = establishDirection(row, column)

x = info[0]
y = info[1]
moved = info[2]
pipe = input[x][y]

# The third function counts the steps of the loop using known coordinates, direction moved, and type of pipe.

def findNext(x, y, moved, pipe):

    steps = 1

    while pipe != 'S':

        steps += 1

        # Referencing the fittings dictionary, we can determine which direction to move forward.

        for choice in fittings[pipe]:

            if choice != moved:

                forward = choice

        # Referencing the directions table, we can determine the next pipe's coordinates.

        delta = directions[forward]
        x = x + delta[0]
        y = y + delta[1]
        pipe = input[x][y]
        moved = findTail(forward)

    return math.floor(steps / 2)

# This helper function flips a forward-facing direction to a backward-facing one to be fed back into the findNext() function.

def findTail(direction):

    if direction == "north":

        return "south"

    if direction == "south":

        return "north"

    if direction == "east":

        return "west"

    if direction == "west":

        return "east"

print(findNext(x, y, moved, pipe))