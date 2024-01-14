with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 10/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

# pipeFittings = {

#     "|": ["north", "south"],
#     "-": ["east", "west"],
#     "L": ["north", "east"],
#     "J": [ "north", "west"],
#     "7": ["south", "west"],
#     "F": ["south", "east"]

# }

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

def findStart(input):

    for line in input:

        if 'S' in line:

            row = input.index(line)
            column = line.index('S')

            return row, column

tuple = findStart(input)

x = tuple[0]
y = tuple[1]
steps = 0
type = input[x][y]
print(type)

def findDirection(row, column):

    global steps

    east = input[row][column + 1]
    south = input[row + 1][column]
    west = input[row][column - 1]
    north = input[row - 1][column]

    if east in backward["west"]:

        steps += 1
        column += 1

    elif south in backward["north"]:

        steps += 1
        row += 1

    elif west in backward["east"]:

        steps += 1
        column -= 1

    elif north in backward["south"]:

        steps += 1
        row -= 1

    # print(steps)

    if row == x and y == column:

        return steps

    else:

        return findDirection(row, column)

print(findDirection(x, y))