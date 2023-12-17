import re # this is to use regex

# This is to grab and add the first and the last values
def grabNum(values):
    # values is an array of strings that contain the numbers
    return int(values[-1]) + 10 * int(values[0])
    # int() is a method to convert to integer
    # like .to_i in ruby
    # or .parseInt() in JS

def main():
    result = 0
    with open("./day-1-1.txt", "r") as in_file:
        for line in in_file:
            digits = re.findall(r"\d", line)
            result += grabNum(digits)
    print(result)

main()
