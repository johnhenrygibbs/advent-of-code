with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 12/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

for line in input:

    array = line.split()

    row = array[0]
    arrangements = array[1].split(",")
    print(row)
    print(arrangements)