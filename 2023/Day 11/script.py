with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 11/input.txt') as file:
    input = file.read().splitlines()

count = 0

for line in input:

    expansion = ""

    for matter in line:

        if matter == '.':

            expansion += '.'

    if line == expansion:

        count += 1

print(count)