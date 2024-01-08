with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 5/input.txt') as file:
    input = file.read().splitlines()

# Solution for Part One

# Formatting an array of seeds as list.

seeds = input.pop(0)
seeds = seeds.split()
seeds.remove(seeds[0])
seeds = list(map(int, seeds))

# Function to make an array of maps out of the input data.

def makeMaps(input):

    maps = []
    legend = []

    for line in input:

        if "map" in line:

            legend = []

        elif line == '' and len(legend) > 1:

            maps.append(legend)

        else:

            legend.append(line)

    maps.append(legend)
    return maps

maps = makeMaps(input)

# The almanac function converts seed numbers via each category (map) to location numbers.

def almanac(seeds, maps):

    locationNumbers = []

    for seed in seeds:

        for map in maps:

            for range in map:

                values = range.split()
                destination = int(values[0])
                source = int(values[1])
                length = int(values[2])

                # Perform the appropriate shift if the seed number falls within the given range.

                if seed >= source and seed < (source + length):

                    seed = seed + (destination - source)
                    break

        locationNumbers.append(seed)

    return locationNumbers

result = almanac(seeds, maps)
result.sort()
print(result[0])