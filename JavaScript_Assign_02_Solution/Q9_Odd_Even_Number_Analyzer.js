// Q9. Odd–Even Number Analyzer

const numbers = [];
const results = [];

// Fill the array with numbers from 1 through 30.
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number according to the requested conditions.
for (const number of numbers) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push(`${number}: ${classification}`);
}

console.log("--- Number Classifications ---");
console.log(results.join("\n"));
