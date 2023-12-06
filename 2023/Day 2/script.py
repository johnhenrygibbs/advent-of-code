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

# Solution for Part Two

def cubed(input):

    sum = 0

    # Same iterative setup as in part one.

    for line in input:

        dict = {}
        data = line.split(":")
        games = data[1].strip().replace(";", ",").split(", ")

        for outcome in games:

            handful = outcome.split(" ")
            handful[0] = int(handful[0])

            # If the color hasn't appeared yet, update the dict with the color and number.

            if handful[1] not in dict:

                dict.update({handful[1] : int(handful[0])})

            # If the color has appeared, check to see if the present number is greater than its previous largest appearance and update accordingly.

            elif handful[1] in dict:

                minimum = dict.get(handful[1])

                if handful[0] > minimum:

                    dict.update({handful[1] : int(handful[0])})

        # Cube the minimums together and add its result to the sum.

        cubed = dict.get('blue') * dict.get('green') * dict.get('red')

        sum += cubed

    return sum

print(cubed(input))