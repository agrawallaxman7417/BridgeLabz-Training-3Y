 "use strict";

// Q7: Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unsupported operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}
class CalculatorInputError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculatorInputError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "divide":
            if (b === 0) throw new CalculatorInputError("Cannot divide by zero.");
            return a / b;
        case "power": return a ** b;
        case "root":
            if (a < 0) throw new CalculatorInputError("Cannot take the real square root of a negative number.");
            return Math.sqrt(a);
        default: throw new InvalidOperationError(operation);
    }
}

console.log("=== Q7: Smart Calculator ===");
for (const operation of operations) {
    try {
        // For root, num1 is the value under the square root; num2 is unused.
        const result = calculate(operation, num1, num2);
        console.log(`${operation.padEnd(8)} | inputs: ${num1}, ${num2} | result: ${result}`);
    } catch (error) {
        console.log(`${operation.padEnd(8)} | ERROR: ${error.name} — ${error.message}`);
    }
}

try {
    calculate("modulo", num1, num2); // Demonstrates custom invalid-operation handling.
} catch (error) {
    console.log(`unknown   | ERROR: ${error.name} — ${error.message}`);
}
