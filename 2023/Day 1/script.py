file = open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 1/input.txt')

# Solution for Part One

def trebuchet(file):

    sum = 0

    for line in file:

        numbers = []

        for char in line:

            if char.isdigit():

                numbers.append(char)

        if len(numbers) == 1:

            calibrationValue = int(numbers[0] + numbers[0])

        else:

            calibrationValue = int(numbers[0] + numbers[len(numbers) - 1])

        sum += calibrationValue

    return sum

print(trebuchet(file))