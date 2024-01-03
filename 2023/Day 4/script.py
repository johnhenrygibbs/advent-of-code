with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 4/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

def scratchcards(input):

    total = 0

    for line in input:

        points = 0

        card = line.split("|")
        winningNumbers = card[0][9:].split()
        myNumbers = card[1].split()

        for i in winningNumbers:

            for j in myNumbers:

                if i == j:

                    if points == 0:

                        points = 1

                    else:

                        points *= 2

        total += points

    return total

print(scratchcards(input))