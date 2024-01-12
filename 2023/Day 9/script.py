with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 9/input.txt') as file:
    input = file.read().splitlines()

# sequence = input[0].split()
# sequence = list(map(int, sequence))
ends = []

def getZeroes(sequence):

    diff = [sequence[i + 1] - sequence[i] for i in range(len(sequence) - 1)]
    ends.append(diff[len(diff) - 1])

    if sum(diff) != 0:

        return getZeroes(diff)

    else:

        return ends

# ends = getZeroes(sequence)

# print(ends)

def extrapolate(ends):

    for i in range(len(ends) - 1, 1, -1):

        nextValue = ends[i] + ends[i - 1]

    return nextValue

# print(extrapolate(ends))

answer = 0

for line in input:

    sequence = line.split()
    sequence = list(map(int, sequence))
    print(sequence)
    ends = getZeroes(sequence)
    print(ends)
    result = extrapolate(ends)
    answer += result
    ends = []

print(sum)