from collections import OrderedDict

with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 7/input.txt') as file:
    input = file.read().splitlines()

dict = OrderedDict()

def convertHands(input):

    for line in input:

        data = line.split()
        hand = data[0]
        bet = data[1]
        dict[hand] = bet

    return dict

print(convertHands(input))