with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 4/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part Two

# Create a dictionary to solve Part Two with card numbers as keys and values to count copies as we find them iteratively.

# Values are set to 1 to account for the original set of cards.

def CreateDictionary(input):

    dict = {}
    i = 1

    while (i < len(input) + 1):

        dict[i] = 1
        i += 1

    return dict

# Solution for Part One

def scratchcards(input):

    total = 0
    dict = CreateDictionary(input)

    # Keep a points count for Part One and a copies value for Part Two.

    for line in input:

        points = 0
        copies = 0

        card = line.split("|")
        winningNumbers = card[0][9:].split()
        myNumbers = card[1].split()

        for i in winningNumbers:

            for j in myNumbers:

                if i == j:

                    copies += 1

                    if points == 0:

                        points = 1

                    else:

                        points *= 2

        total += points

        # If copies are found (winning numbers), increment each value below the winning card by the present value (knownCopies) of the winning card until copies equals 0.

        if copies > 0:

            copy = input.index(line) + 2
            knownCopies = dict[input.index(line) + 1]

            while (copies > 0):

                dict[copy] += knownCopies
                copy += 1
                copies -= 1

    result = sum(dict.values())

    return total, result

print(scratchcards(input))