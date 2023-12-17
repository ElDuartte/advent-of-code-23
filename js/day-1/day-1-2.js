const fs = require('fs');

// In JavaScript, this is called an object
const textMatch = {
    "one": "o1e",
    "two": "t2o",
    "three": "t3e",
    "four": "f4r",
    "five": "f5e",
    "six": "s6x",
    "seven": "s7n",
    "eight": "e8t",
    "nine": "n9e",
};

// Look in the object and replace with the value
function adapt(inputString) {
    let result = inputString;
    for (const [wordLiteral, numeric] of Object.entries(textMatch)) {
        const regex = new RegExp(`\\b${wordLiteral}\\b`, 'g');
        result = result.replace(regex, numeric);
    }
    return result;
}

function grabNum(values) {
    return parseInt(values[values.length - 1]) + 10 * parseInt(values[0]);
}

function main() {
    let result = 0;
    const filePath = "./day-1-2.txt";

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n');

        lines.forEach((line) => {
            const digits = line.match(/\d/g);
            if (digits) {
                result += grabNum(digits);
            }
        });

        console.log(result);
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
}

main();
