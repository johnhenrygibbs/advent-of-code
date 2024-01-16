with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 10/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

backward = {

    "east": ["-", "L", "F"],
    "south": ["|", "7", "F"],
    "west": ["-", "J", "7"],
    "north": ["|", "L", "J"]

}

forward = {

    "east": ["-", "J", "7"],
    "south": ["|", "L", "J"],
    "west": ["-", "L", "F"],
    "north": ["|", "7", "F"]

}

object = {

    ("7", "north"): ("west", 0, -1),
    ("7", "east"): ("south", 1, 0),

}

direction = {

    "west": (0, -1),
    "east": (0, 1),

}

def findStart(input):

    for line in input:

        if 'S' in line:

            row = input.index(line)
            column = line.index('S')

            return row, column

tuple = findStart(input)

def findFirstNeighbor(row, column):

    neighbor = []
    steps = 0

    east = input[row][column + 1]
    south = input[row + 1][column]
    west = input[row][column - 1]
    north = input[row - 1][column]

    if east in backward["west"]:

        neighbor = [row, column + 1]

    elif south in backward["north"]:

        neighbor = [row + 1, column]

    elif west in backward["east"]:

        neighbor = [row, column - 1]

    elif north in backward["south"]:

        neighbor = [row - 1, column]

        # Call findNext(row - 1, column, "north")

    return neighbor

x = tuple[0]
y = tuple[1]

type = input[x][y]
neighbor = findFirstNeighbor(x, y)

print(findFirstNeighbor(x, y))

def findNext(row, column, direction):

    # if the type of input[row, column] == "S" then return 1

    # return 1 + findNext(row, column - 1, "west"

    return 