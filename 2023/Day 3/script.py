with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 3/input.txt') as file:
    input = file.read().splitlines()

for line in input:

    for char in line:

        if char.isdigit():

            print(char)