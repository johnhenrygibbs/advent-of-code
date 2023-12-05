with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 1/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

def trebuchet(input):

    sum = 0

    for line in input:

        numbers = []

        for char in line:

            if char.isdigit():

                numbers.append(char)

        if len(numbers) == 1:

            calibrationValue = int(numbers[0] + numbers[0])

        else:

            calibrationValue = int(numbers[0] + numbers[len(numbers) - 1])

        sum += calibrationValue

        # print(numbers)

    return sum

print(trebuchet(input))

# Solution for Part Two

def swap(input):

    # Create a list of digits to check for occurrences within each line.

    digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    result = []

    for line in input:

        for num in digits:

            while num in line:

                # The trueNumber is adjusted for zero-based indexing.
                # The index is adjusted to the second character to account for overlapping numbers (e.g. "oneeight")

                trueNumber = digits.index(num) + 1
                index = line.index(num) + 1

                # Using replace() won't work, so we have to use list() and join() methods to specify the desired index.

                lineAsList = list(line)
                lineAsList[index] = str(trueNumber)
                line = "".join(lineAsList)

        result.append(line)

    return result

newLines = swap(input)

print(trebuchet(newLines))