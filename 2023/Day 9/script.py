with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 9/input.txt') as file:
    input = file.read().splitlines()

for line in input:

    values = line.split()
    print(len(values))

    for number in values:

        print(number)