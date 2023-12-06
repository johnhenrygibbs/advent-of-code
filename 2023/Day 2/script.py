with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 2/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

def cubeGame(input):

    sum = 0

    # Iterate through each line and isolate the gameID from the outcomes.

    for line in input:

        data = line.split(":")
        gameID = int(data[0][5:])
        games = data[1].strip().replace(";", ",").split(", ")
        isPossible = True

        # Iterate through the outcomes and check for "impossible" criteria.

        for outcome in games:

            handful = outcome.split(" ")
            handful[0] = int(handful[0])

            if handful[0] > 14:

                isPossible = False
                break

            elif handful[0] > 13 and handful[1] != "blue":

                isPossible = False
                break

            elif handful[0] > 12 and handful[1] != "blue" and handful[1] != "green":

                isPossible = False
                break

        if isPossible == True:

            sum += gameID

    return sum

print(cubeGame(input))