from collections import OrderedDict

with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 7/input.txt') as file:
    input = file.read().splitlines()

dict = OrderedDict()

def convertHands(input):

    for line in input:

        data = line.split()
        hand = data[0]
        bet = int(data[1])
        dict[hand] = bet

    return dict

deck = convertHands(input)

def replaceFaceCards(deck):

    for hand, bet in deck.items():

        cards = list(hand)
        newHand = []

        for card in cards:

            if card == "T":

                card = 10

            elif card == "J":

                card = 11

            elif card == "Q":

                card = 12

            elif card == "K":

                card = 13

            elif card == "A":

                card = 14

            newHand.append(int(card))

        deck[hand] = newHand

    return deck

print(replaceFaceCards(deck))