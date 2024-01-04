with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 6/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

def boatRace(input):

    for line in input:

        numbers = line.split()
        print(numbers[1:])

print(boatRace(input))