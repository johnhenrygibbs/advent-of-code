with open('/Users/johngibbs/Desktop/John/Repositories/advent-of-code/2023/Day 5/input.txt') as file:
    input = file.read().splitlines()

    # for line in input:

    #     if line == "":

    #         input.remove(line)

seeds = input.pop(0)
seeds = seeds.split()
seeds.remove(seeds[0])
seeds = list(map(int, seeds))

input.remove(input[0])

print(input[0])

def makeMaps(input):

    maps = []

    for line in input:

        if "map" in line:

            legend = []

        elif line == '\n':

            print("HELLO")

            maps.append(legend)

        else:

            legend.append(line)

    return maps

maps = makeMaps(input)

for line in maps:

    print(line)

# print(maps)

# def almanac(seeds, maps):

    # for seed in seeds:

    #     print(seed)

    #     for map in maps:

    #         for range in map:

# print(almanac(seeds, maps))