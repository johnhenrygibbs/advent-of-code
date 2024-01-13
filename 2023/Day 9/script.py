with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 9/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

def extrapolate(sequence):

    # Store the last value of the sequence as nextValue before moving on to the differences.

    nextValue = sequence[len(sequence) - 1]

    # While the sequence does not contain all zeroes, continue generating sequences of difference and increment nextValue with the last entry.

    while any(sequence) != 0:

        sequence = [sequence[i + 1] - sequence[i] for i in range(len(sequence) - 1)]
        nextValue += sequence[len(sequence) - 1]

    return nextValue

answerOne = 0
answerTwo = 0

# Iterate through the input and call the extrapolate() function on each line to generate the sum.

for line in input:

    sequence = line.split()
    sequence = list(map(int, sequence))
    answerOne += extrapolate(sequence)

    # Solution for Part Two

    # Reverse the line and perform the extrapolate() function on each sequence.

    reversed = line.split()
    reversed.reverse()
    reversed = list(map(int, reversed))
    answerTwo += extrapolate(reversed)

print(answerOne)
print(answerTwo)