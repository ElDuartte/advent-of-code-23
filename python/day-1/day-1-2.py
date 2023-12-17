import re

# In python this is called dictionary
textMatch = {
    "one": "o1e",
    "two": "t2o",
    "three": "t3e",
    "four": "f4r",
    "five": "f5e",
    "six": "s6x",
    "seven": "s7n",
    "eight": "e8t",
    "nine": "n9e",
}

# Look in the dictionary and replace with the value
def adapt(input_string):
    result = input_string
    for word_literal, numeric in textMatch.items():
        result = result.replace(word_literal, numeric)
    return result

def grabNum(values):
    return int(values[-1]) + 10 * int(values[0])

def main():
    result = 0
    with open("./day-1-2.txt", "r") as in_file: # The file 1-1 and 1-2 are the same
        for line in in_file:
            digits = re.findall(r"\d", adapt(line))
            result += grabNum(digits)
    print(result)

main()
